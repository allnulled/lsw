const escape_html_attribute = function (str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const unescape_html_attribute = function (str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
};

window.documentatori18n = {
  current_language_iso: navigator.language.split("-")[0].toLowerCase(),
  translations: {},
  async change_language(iso = this.current_language_iso) {
    try {
      this.current_language_iso = iso;
      await this.load_iso_translations(iso);
      const translatable_elements = Array.from(document.querySelectorAll("[data-i18n-key]"));
      for (let index_element = 0; index_element < translatable_elements.length; index_element++) {
        const translatable_element = translatable_elements[index_element];
        this.update_element(translatable_element);
      }
    } catch (error) {
      console.log(error);
    }
  },
  update_element(element) {
    const key = element.getAttribute("data-i18n-key");
    element.innerHTML = this.get_translation(key, element);
  },
  get_translation(key_brute, element) {
    const key = keymapper_json[key_brute] || key_brute;
    let translation = key;
    Layer_1_Get_translation: {
      try {
        translation = this.translations[this.current_language_iso][key];
        if (typeof translation !== "string") {
          throw new Error("Translation not found");
        }
      } catch (error) {
        console.info("[documentatori18n][key-not-found][key=" + key + "]");
        translation = key;
      }
    }
    // @CAUTION: HACKY POINT!
    let translation_rendered = translation;
    Layer_2_Apply_ejs_rendering: {
      try {
        translation_rendered = window.ejs.render(translation_rendered, { element });
      } catch (error) {
        console.error("[documentatori18n][key-rendering-error][key=" + key + "]");
        console.log(error);
      }
    }
    let translation_corrected = translation_rendered;
    Layer_4_Corret_typos: {
      try {
        // translation_corrected = translation_corrected.replace(/\.( |\n|\r|\t)*\.( |\n|\r|\t)*$/g, ".");
      } catch (error) {
        console.error("[documentatori18n][key-correcting-error][key=" + key + "]");
        console.log(error);
      }
    }
    let translation_marked = translation_corrected;
    Layer_3_Transform_markdown: {
      try {
        translation_marked = window.marked.parse(translation_marked);
      } catch (error) {
        console.error("[documentatori18n][key-marking-error][key=" + key + "]");
        console.log(error);
      }
    }
    console.log("Corrected: " + translation_marked);
    return translation_marked;
  },
  get_translator() {
    return this.get_translation.bind(this);
  },
  async load_iso_translations(iso) {
    try {
      const response = await fetch("./translations/" + iso + ".json");
      const translations = await response.json();
      this.translations[iso] = translations;
    } catch (error) {
      console.log(error);
    }
  }
};

let keymapper_json = undefined;
window.addEventListener("load", async function () {
  try {
    Get_keymapper: {
      const keymapper_response = await fetch("./translations/keymapper.json");
      keymapper_json = await keymapper_response.json();
    }
    await window.documentatori18n.change_language();
    let available_json = undefined;
    Get_available_languages: {
      const available_response = await fetch("./translations/available.json");
      available_json = await available_response.json();
    }
    const selector_holder = document.querySelectorAll("#language_selector_holder");
    for (let index_element = 0; index_element < selector_holder.length; index_element++) {
      const element = selector_holder[index_element];
      const selector_in_html = window.ejs.render(`
        <div style="display: flex; flex-direction: flex-column; align-items: center;">
          <span style="flex: 100; text-align:right;" data-i18n-key="Idioma:">Idioma:</span>
          <select>
            <% for(let index = 0; index < available_json.all.length; index++) { %>
            <% const lang = available_json.all[index]; %>
            <option value="<%-lang%>"><%-available_json.names[lang]%></option>
            <% } %>
          </select>
        </div>
      `, { available_json });
      element.innerHTML = selector_in_html;
      const selector = element.querySelector("select");
      selector.value = navigator.language.split("-")[0];
      selector.addEventListener("change", async function (event) {
        await window.documentatori18n.change_language(event.target.value);
      });
    }
  } catch (error) {
    console.log(error);
  }
});
