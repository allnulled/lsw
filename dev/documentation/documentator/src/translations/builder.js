const get_remote_translation = async function(original_text, language) {
  const res = await fetch("http://127.0.0.1:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: original_text,
      source: "es",
      target: language,
      format: "text",
      api_key: ""
    }),
    headers: { "Content-Type": "application/json" }
  });
  return await res.json();
}

const persist_pid = function() {
  try {
    const pid_previous = JSON.parse(require("fs").readFileSync(__dirname + "/builder.pid.json").toString()).pid;
    process.kill(pid_previous);
  } catch (error) {}
  require("fs").writeFileSync(__dirname + "/builder.pid.json", JSON.stringify({
    pid: process.pid
  }, null, 2), "utf8");
}

const main = async function () {
  persist_pid();
  const output = {};
  const response = await fetch("http://127.0.0.1:5000/languages");
  const data = await response.json();
  const available_languages = data[0].targets;
  require("fs").writeFileSync(__dirname + "/output/available.json", JSON.stringify({
    all: available_languages,
    names: {
      "sq": "Albanian",
      "ar": "Arabic",
      "az": "Azerbaijani",
      "bn": "Bengali",
      "bg": "Bulgarian",
      "ca": "Catalan",
      "zh": "Chinese",
      "zt": "Chinese (traditional)",
      "cs": "Czech",
      "da": "Danish",
      "nl": "Dutch",
      "en": "English",
      "eo": "Esperanto",
      "et": "Estonian",
      "fi": "Finnish",
      "fr": "French",
      "de": "German",
      "el": "Greek",
      "he": "Hebrew",
      "hi": "Hindi",
      "hu": "Hungarian",
      "id": "Indonesian",
      "ga": "Irish",
      "it": "Italian",
      "ja": "Japanese",
      "ko": "Korean",
      "lv": "Latvian",
      "lt": "Lithuanian",
      "ms": "Malay",
      "nb": "Norwegian",
      "fa": "Persian",
      "pl": "Polish",
      "pt": "Portuguese",
      "ro": "Romanian",
      "ru": "Russian",
      "sr": "Serbian",
      "sk": "Slovak",
      "sl": "Slovenian",
      "es": "Spanish",
      "sv": "Swedish",
      "tl": "Tagalog",
      "th": "Thai",
      "tr": "Turkish",
      "uk": "Ukranian"
    }
  }, null, 2), "utf8");
  const main_language = require(__dirname + "/../../config.json").main_language;
  const main_translations = require(__dirname + `/source/${main_language || "en"}.json`);
  const i18n_keys = Object.keys(main_translations);
  for(let index_available_language=0; index_available_language<available_languages.length; index_available_language++) {
    const available_language = available_languages[index_available_language];
    const available_language_file = available_language + ".json";
    output[available_language_file] = {};
    for(let index_keys=0; index_keys<i18n_keys.length; index_keys++) {
      const i18n_key = i18n_keys[index_keys];
      const i18n_value = main_translations[i18n_key];
      const i18n_response = await get_remote_translation(i18n_value, available_language);
      const i18n_result = i18n_response.translatedText;
      output[available_language_file][i18n_key] = i18n_result
      console.log(`[translating][language: ${available_language_file} ${index_available_language+1}/${available_languages.length}][key: ${index_keys+1}/${i18n_keys.length}]`);
    }
    console.log(`[translating][language: ${available_language_file} FINISHED!`);
    const lang_path = require("path").resolve(__dirname, "output", available_language_file);
    require("fs").writeFileSync(lang_path, JSON.stringify(output[available_language_file], null, 2), "utf8");
  }
  console.log("[translating] Translation finished successfully.");

};


module.exports = main();