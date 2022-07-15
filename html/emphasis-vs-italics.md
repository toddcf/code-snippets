# Emphasis vs. Italics

HTML has an `<em>` tag and an `<i>` tag.


## <em>

`<em>` represents *emphasis*, and is used to stress a certain word or phrase.

`<p>I <em>know</em> that he is right!</p>`

Although most browsers will italicize emphasized text, `<em>` should not be used for visual purposes.  (NOTE: To be safe, you can specify the type of styling you want your emphasized text to have using CSS rather than trust each browser to be consistent.)


## <i>

`<i>` represents *italics*, and is used to visually italicize text without emphasizing it.  For example, you might need to italicize some text that is in another language.

In fact, if you are doing this, you can even add a language attribute to the `<i>` tag, like this:

`<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>`

Or you might want to italicize an entire journal entry that is a subset of a novel -- that doesn't mean you would want it read aloud with emphasis; you just want to visually differentiate it from the main text of the novel.