function shout(string) {
    return string.toUpperCase();
}

"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}

"HELLO".toLowerCase();


function logShout(aPhrase) {
    console.log(aPhrase.toUpperCase());
}

function logWhisper(aPhrase) {
    console.log(aPhrase.toLowerCase());
}

describe('sayHiToGrandma(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToGrandma('hello')).toEqual("I can't hear you!");
    })
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!");
    })
  
    it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
      expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.");
    })
  })

  function sayHiToGrandma (aPhrase) {
    let quietAnswer = "I can't hear you!";
    let loudAnswer = "YES INDEED!";
    let loveAnswer = "I love you, too.";
    if (aPhrase.toLowerCase(aPhrase) === aPhrase) {
      return quietAnswer;
    }
    else if (aPhrase.toUpperCase(aPhrase) === aPhrase) {
      return loudAnswer;
    }
    else if ("I love you, Grandma." === aPhrase) {
      return loveAnswer
    }
  }



