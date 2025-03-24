# @allnulled/documentator

To document projects using documentator comments. Very simple tool.

## Index

- [@allnulled/documentator](#allnulleddocumentator)
  - [Index](#index)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Best practices](#best-practices)
  - [Comment types](#comment-types)
    - [Multiline comments](#multiline-comments)
    - [Oneline comments](#oneline-comments)
  - [Special properties](#special-properties)
  - [Workflow](#workflow)
  - [Custom configurations](#custom-configurations)
  - [Overview](#overview)
  - [Conclusion](#conclusion)

## Installation

```sh
git clone ... .
npm install
```

- Use `git`, and not `npm`, because you'll need the whole structure for advanced features.
- Even so, to fully automate work, you need `libretranslate` running on port 5000.
  - And I am not gonna do a script to make this work.
  - I think I did in previous chapters, in some repo.

## Usage

```js
const comments = require("@allnulled/documentator").parse_directory(".", {
    fileformats: [
        ".js",
        ".css",
        ".html"
    ],
    ignored: [
        "/node_modules/",
        "/docs/",
    ],
    output_dir: "docs/reference",
    pipes: ["generate_html"]
});
```

- Only synchronous API, so avoid to use it in production.

## Best practices

- Delete `test` folder as you are not gonna use it, and the tool is (presumptly) enough tested.

## Comment types

### Multiline comments

Multiline comment requires `/**` to start and `*/` to end, minimum. It has no conditions inside, but:
  - it will clean indentation (if starts with spaces and then `*`) and not compute it.
  - it will accumulate as string all the comment properties that...
    - follow from the begining of the line `@{ whatever inside }:`)
  - the default text (without assigned property) goes to the property `$comment`
  - the properties that start with `$` are not inserted in the documentation

```js
/**
 * Text to $comment.
 * 
 * @property 1: value 1.
 * @property 2: value 2.
 * @property 3: value 3.
 * @property 4: value 4.
 * @property 5: value 5.
 * @property 5: this is following the previous property.
 * 
 */
```

### Oneline comments

Oneline comment requires `//` and `\n` or end of file. It can do the same as the multiline, but:
  - it uses `|` instead of new line to separate properties.

```js
// @prop1: val1 | @property 2: value 2
```

This type of comment requires to start by one property, so `// @something: something` is the minimum.

## Special properties

The are some special properties.

- `$output`: specifies the file to push this comment into. By default `index.html`.
- `$section`: specifies the section to push this comment into. It is a lower category of `$output` (file) in the book. By default `0. Prelude`.
  - Sections are sorted alphabetically: name and prefix-numerate them consequently.
- `$priority`: specifies the importance of this comment in the section. The higher, the sooner it will appear in the section. By default `0`.
- `$reference`: with this property you can write the documentation out of the code, and the `documentator` will take care to inject it again later.
   - In the `documentator/src/pipes/expand_references.js`, this field lets you inject from files under `documentator/src/references` (using `.ref` for convenience but not constricted) the comment you really want to put in that line.
   - This property is thought to be used with oneline comments, maybe this makes more sense.
      - Because it overwrites the firstly captured comment with the values taken from the refered file:
         - in which, btw, you DO NOT HAVE TO wrap the javadoc comment between `/**` and `*/`.
         - That was why the `.ref`, for this convenience.
- `$nokey.*`: When you start a property with `nokey.`, the `documentator` will not print it. This is useful to separate blocks inside 1 comment.

## Workflow

On 1 hand, you want to work seeing the results automatically. For this:

```sh
npm run dev
```

On the other hand, maybe, you want to get the translations automatically too. For this:

```sh
libretranslate # must be running on port 5000, and on other script:
npm run autotranslate
```

With this, you get all the translations automatically generated. And on the other hand, the `npm run dev` will separate the strings it catches, so you can write in your preferred language.

## Custom configurations

- You can play with the parameters of the `parse_directory` function.
- You can change the main language you want to use, at `config.json#main_language`.
  - By default is set to `es`.
  - This parameter is used in different places, so you have to provide it independently.


## Overview

Note that documentator is not only a parser.

Its power lives in the `parse_directory` function, where the parser is only a required feature to complet the whole process.

This means that you can change from the parser, that is true. But the pipe it gives is so ambitious, that it is rare that you need to do this: it maybe is that you want to, but not that you need to.

The tool provides a pipe for:

 - Recursive multiline and one-line comments finder
 - Allowed to be externalized (`$reference` or `reference`)
 - Allowed to be saved in different files (`$output` or `output`)
 - Allowed to be saved in different sections (`$section` or `section`)
 - Allowed to be saved with different priorities inside the same (file and) section (`$priority` or `priority`)
 - Internationalizable
   - Automatically internationalizable to more than 70 languages
     - Maybe that way, but what you expect from me, to hire translators or what?
 - Markable (coliving with internationalizability, thanks to Markdown)
   - So you can, still internationalizing, inject styles through Markdown.
     - Note that comments that contain HTML openers or closers (&gt; or &lt;), are not internationalized.
     - But you still can use Markdown syntax to have a bit of styling.
 - Injectable
   - Because nothing privates you from injecting your own HTML from the comments
 - Renderizable
   - I am not missing anything from this feature, but the piping allows to render EJS templates to.
   - So, note that your documentation is symbolically conditioned. 
     - But not limited, because you have special escaping characters in HTML yet.
     - And also note that your code will be correctly escaped when injected as HTML.

The pipe is a bit complex. The code is spread in the builder, the pipes, and the client needed to request the translations, available languages, and keymaps of the translations.

The pipe in the client is the one that will give you the best view:

From the client-side, all the translations pass through this method:

```js
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
```

So the order is: 

  - Get the translation
  - Render as EJS
  - Correct typos (none right now)
  - Transform markdown to HTML

This way, all your strings are automatically **translated** and **marked**.

The order is important, because we could not do automatic translation if we marked the text before.

## Conclusion

So, in the end, Markdown seems to have a non-practical, but technical, reason to exist. And it is a half-syntactical half-programmatical reason. And this is: to allow auto-translation colive with marked text in one same flux of piping.

Nice, I never heard of that. But I can see it now.

Okay.

This tool, finally, aims to quit the job of *documentation + translation + markup*, as a big framework to automate all the process, this way you can forget about this bunch of work.

On the other hand, this is a very protocoled tool, as you can see, you pass your "innocent Javadoc comment" through a lot of things, and some of them may collision with your way. For example, symbolically you are a bit restricted, as the minimum usage of the `<` and `>` symbols may invalidate the whole block of text, to be translatable. There are reasons for this to happen, you cannot break the HTML code easily, and translate it so fast. You can, but you have to follow advanced patterns of memory and algorithmia, and it is not that worthy, maybe for...

Okay, let me say this. Maybe for the user's perspective, in its egocentricity, where its problem is THE PROBLEM, by which they may pay you or not, whatever. Then, from this perspective of the user, yes, it's worthy. If that is your point, use Google Translate, they will make better job. I do not know if it is clear... it is possible. And possibly, with ChatGPT is easily, fastly achievable. But... that things, maybe some day, in which I do not want to think, maybe it is the last task. Nobody is paying me, okay. And nobody is giving me a reason why they do not give me a job, or let me in. In the flux. Of money. Of fucking money, I somethimes think I am happier if they do not give it to me. Because this way, they will die dirty, and not me. I really, deeply feel that. That they can stay with their money for the rest of my life, because coming here to see, only to see, how they move and I cannot do it... I don't know, for you the life, okay, for you everything.

I know, I know. This is like a primitive toy, in a primitive dilema. Because Google Translate does not care about breaking or not the code, it takes the HTML and goes. And you are right, use it. This is not what I am solving. I am solving the process to get, for completely free, the documentation from MY software project, and generate translations and markup. No external APIs, no internet, I am offline and I do not have to say to GOOGLE INC. "hey, please, let me talk to your computer to do this stuff". No. I am working offline and getting strange symbols from other languages, to do the job somehow.

I do not know if it is clear. It is not a "for fun" thing. It is a "for economical, political, and psychological" thing. Fucking free, guys. No GOOGLE INC in the middle. I am more interested in libretranslate than in Google Translate if I cannot run it in my PC. Easy said. And if I could, I just need to make an adapter to use, instead of libretranslate, googletranslate.

So.

This is not the tool you want. This is an instrumental tool for my projects. And you can use it, because I do not win anything closing it. The strong point for me is libretranslate. But the markdown thing is fucking crazy, on top of that. And on the bottom you have references, sectioning, optional HTML markup... even EJS rendering. It's too much, but I feel that with a tool like this, it's worthy to document a project.

Because you go fast. You can produce big documentation easily, flexibly, with too much features.

Beside of that, it's the best tool to document I have ever used. But I haven't used that much, all to be said.

My conclusion is that is a good work. On top of libretranslate, of course. It's a minimalistic bridge to it, but full-featured.

The next thing is directly something like Google Translate. It takes whatever page you want. So, see it, this is only to have it offline, otherwise I would also rely on Google Translate. And for the comfortability of the user, to have the button of the languages there already, not downloading the Google Translate API.

Another conclusion is that this is not the best way to document a project. I know, I know. I just cannot... I just... who cares, I mean. Nobody gives me a job, no matter what I do, it's like I was invisible. So... my desires, my ambitions, who cares? Nobody pays me. Nobody is gonna pay me. My payment is life. But I should be happy with it, and I... it takes me. It takes me, I want drugs, I want to have my own marijuana plants, my own food, my own things.

I compare myself with the others. And nobody has given what I have, and nobody is living how I live.

It's not fair, and it hurts the head, you know. It hurts it a lot. Drugs may hurt it, but this... this destroys it.

And... this is my life, this is what I am living everyday of my life. When I do something that I think is minimumly useful, competitive, competent... I feel bad with myself. I feel worse with the others. Because of not having my plants. If I had them, I could go beside reality again. But they do not see this as good. And I am only 1 guy. And it feels nasty, I can swear.

So my conclusion is all this shit because I do not agree with the global world structure. And they play this game of hostility towards you know, no money people.

It's hostile. And I become too.

It's human. And I hate it, I hate belonging to them. It's... a fucking disgrace made 100-year-old thing.


I don't know. I just... do what you want with your fucking money. Do what you want with your fucking politics, your fucking laws, your fucking false democracies, your fucking false economy.

That's the feeling. The feeling is do the fuck you want with your fucking dirty world.

Just enjoy it. Dirty pig. Enjoy it. I do not want your shit anymore.