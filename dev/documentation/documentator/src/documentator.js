/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Documentator_language: peg$parseDocumentator_language },
      peg$startRuleFunction  = peg$parseDocumentator_language,

      peg$c0 = function(comments) { return { comments, code: text() } },
      peg$c1 = function(tokens) { return tokens.filter(t => !!t) },
      peg$c2 = "//",
      peg$c3 = peg$literalExpectation("//", false),
      peg$c4 = function(token1, content, token2) { return { $location: minify_location(location()), ...compact_comment_object(content) } },
      peg$c5 = "|",
      peg$c6 = peg$literalExpectation("|", false),
      peg$c7 = "@",
      peg$c8 = peg$literalExpectation("@", false),
      peg$c9 = function(token1, token2, property, value) { return [property.trim(), value.trim()] },
      peg$c10 = function() { return text() },
      peg$c11 = peg$anyExpectation(),
      peg$c12 = function(content) { return { $location: minify_location(location()), ...content } },
      peg$c13 = "/**",
      peg$c14 = peg$literalExpectation("/**", false),
      peg$c15 = function(lines) { return compact_comment_object(lines) },
      peg$c16 = function(atom) { return atom },
      peg$c17 = "*/",
      peg$c18 = peg$literalExpectation("*/", false),
      peg$c19 = "*",
      peg$c20 = peg$literalExpectation("*", false),
      peg$c21 = function(tabulation, token) { return token },
      peg$c22 = function(tabulation, token1, property, value) { return [property, value] },
      peg$c23 = ":",
      peg$c24 = peg$literalExpectation(":", false),
      peg$c25 = function(chars) { return chars.join("") },
      peg$c26 = "\t",
      peg$c27 = peg$literalExpectation("\t", false),
      peg$c28 = " ",
      peg$c29 = peg$literalExpectation(" ", false),
      peg$c30 = "\r\n",
      peg$c31 = peg$literalExpectation("\r\n", false),
      peg$c32 = "\r",
      peg$c33 = peg$literalExpectation("\r", false),
      peg$c34 = "\n",
      peg$c35 = peg$literalExpectation("\n", false),
      peg$c36 = function() { return false },

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseDocumentator_language() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseDocumentator_text();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDocumentator_text() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseDocumentator_comment();
    if (s2 === peg$FAILED) {
      s2 = peg$parseAny_character();
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseDocumentator_comment();
      if (s2 === peg$FAILED) {
        s2 = peg$parseAny_character();
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c1(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDocumentator_comment() {
    var s0;

    s0 = peg$parseDocumentator_comment_multiline();
    if (s0 === peg$FAILED) {
      s0 = peg$parseDocumentator_comment_uniline();
    }

    return s0;
  }

  function peg$parseDocumentator_comment_uniline() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parse__();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parse__();
    }
    if (s2 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c2) {
        s3 = peg$c2;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseDocumentator_comment_uniline_property();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseDocumentator_comment_uniline_property();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOL();
        if (s3 === peg$FAILED) {
          s3 = peg$parseEOF();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c4(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_comment_uniline_property() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parse__();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parse__();
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 124) {
        s3 = peg$c5;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parse__();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parse__();
      }
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s4 = peg$c7;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDocumentator_property_token();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseDocumentator_value_inline();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c9(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_value_inline() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseDocumentator_value_inline_char();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseDocumentator_value_inline_char();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c10();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDocumentator_value_inline_char() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseEOL();
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 124) {
        s2 = peg$c5;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
    }
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c10();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_comment_multiline() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseDocumentator_opener();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseDocumentator_content();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDocumentator_closer();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c12(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_opener() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c13) {
      s1 = peg$c13;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c14); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse__();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse__();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOL();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_content() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseDocumentator_sentence();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseDocumentator_sentence();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c15(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDocumentator_sentence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseDocumentator_closer();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseDocumentator_property();
      if (s2 === peg$FAILED) {
        s2 = peg$parseDocumentator_line();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c16(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_closer() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse__();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse__();
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c17) {
        s2 = peg$c17;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_line() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parse__();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parse__();
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s3 = peg$c19;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseText_line();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c21(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_property() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parse__();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parse__();
    }
    if (s2 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s3 = peg$c19;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parse__();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parse__();
      }
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s4 = peg$c7;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDocumentator_property_token();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseText_line();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocumentator_property_token() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseNo_EOL_or_semicolon();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseNo_EOL_or_semicolon();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c23;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c25(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNo_EOL_or_semicolon() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseEOL_or_semicolon();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c10();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOL_or_semicolon() {
    var s0;

    s0 = peg$parseEOL();
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s0 = peg$c23;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
    }

    return s0;
  }

  function peg$parseText_line() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseNo_EOL_or_Documentator_closer();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseNo_EOL_or_Documentator_closer();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEOL();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c25(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNo_EOL_or_Documentator_closer() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseEOL_or_Documentator_closer();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c10();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOL_or_Documentator_closer() {
    var s0;

    s0 = peg$parseEOL();
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c17) {
        s0 = peg$c17;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c18); }
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0;

    s0 = peg$parse__();
    if (s0 === peg$FAILED) {
      s0 = peg$parse___();
    }

    return s0;
  }

  function peg$parse__() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 9) {
      s0 = peg$c26;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c27); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c28;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
    }

    return s0;
  }

  function peg$parse___() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c30) {
      s0 = peg$c30;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c32;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c33); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s0 = peg$c34;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c35); }
        }
      }
    }

    return s0;
  }

  function peg$parseEOL() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c30) {
      s0 = peg$c30;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c32;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c33); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s0 = peg$c34;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c35); }
        }
      }
    }

    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c11); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAny_character() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c11); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c36();
    }
    s0 = s1;

    return s0;
  }


    const minify_location = function(loc) {
      return loc;
      return JSON.stringify(loc);
      return `${loc.start.line}:${loc.start.column}-${loc.end.line}:${loc.end.column}|${loc.start.offset}-${loc.end.offset}`;
    };
    const compact_comment_object = function(array) {
      const output = {$comment:""};
      let last_key = "$comment";
      for(let index_array=0; index_array<array.length; index_array++) {
        const item = array[index_array];
        if(typeof item === "object") {
          const [key, value] = item;
          if(!(key in output)) {
            output[key] = "";
          }
          output[key] += output[key].length > 0 ? "\n" : "";
          output[key] += value;
          last_key = key;
        } else {
          output[last_key] += output[last_key].length > 0 ? "\n" : "";
          output[last_key] += item;
        }
      }
      if(output.$comment === "") {
        delete output.$comment;
      }
      return output;
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
