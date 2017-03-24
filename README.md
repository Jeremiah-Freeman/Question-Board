# message-board

This is a question and answer board where users can add questions and recieve answers. Users can add and edit questions

## Planning
  1. Configuration/dependencies:
    - use ember to create new project
    - enter project folder
    - install ember
    - run server

##  Specs:
    1. user can pick a question on the homepage  | "Is love the answer?" | author: Dan Chikakawa - anwser: yes, love is truly thw anwser

    2. user can add a question | "Is the earth round?".

    3. user can edit the question |  "Is love the answer?" | edit: "Do you think that love is the answer?".


##  Integration:
    - Set up planning and specs in README.md.

    - Generate routes
      - contact, about, index
        - Add basic HTML to routes generated.
          - Links to each pages (loops)
          - index.hbs will be main page

    - Add model
      - Add a 'questions' model
      - Create attributes in app/models/question.js
        - question: DS.attr()
        - author: DS.attr()

    - Install emberfire (ember install emberfire)

    - Configure firebase
      - Create the "questions" database
      - Add "questions.json"
      - Import .json to firebase
        - update rules to 'true'
      - Update routes/index.js
        - findAll()

    - Build out NavBar (applications)

    - Components
      - ember g component question-tile
      - Build out templates/index.hbs (connects to question-tile.hbs)
        - Add all 'questions' and 'name of author' as LINKS
        - Add new question box (adds it to index.hbs)
      - Build out question-tile.hbs for displaying content
        - add answer box
        - add edit box
      - Build functionality for question-tile.js

    - Save functionality
      - create in:
        - index.hbs
         - add input box(Bootstrap)
         - add button {{action 'saveQuestion1'}}
          - render on question-tile.hbs
        - question-tile.hbs
          - add input box(Bootstrap)
          - add button {{action 'saveAnswer1'}}
          - add button for updating answer
      - Add save behavior actions to index.js and question-tile.js
      - Add update behavior to question-tile.js

    - Create new route 'answerBoard'
      - add connection ID to path to app/router
      - add connection ID to path app.routes/answerBoard
      _ add connection ID to path components/answerBoard-tile
      - Build Component 'answerBoard-tile'

    - Add new model for answers
      - add 'anwsers' and 'author' to its model page
      - update index.js with RSVP hash
    * UPDATE ALL PATHS IN INDEX.hbs
      - (each loops) model.question / model.answer
    * HARDCODE answers into firebase
      -create new-answer components
      - add anwsers_id to the input box to collect it
      - add save function to reviews/questions

    - Many to one
      - add a answer to the questions model (async)
      - add a question to the answer model (async)
      - Make sure to add saveAnswer in new-answer.js
      - add saveAnswer(params) to 'question.js'
      - have reviews in each loop on individual questions
      - make sure of paths from questions are to reviews




  UX/UI:
    - Add custom styling / form placement.
    - Bootstrap or jQuery UI( try jQuery UI to improve understanding ).
    - Add image to README.md(icon size)


  FreshenUp:
    - Clean up unneeded code or old code.
    - Fix indentation.
    - Make it tidy.


  Last Call:
    - Pass through objectives one last time.
    - Push one last time.
    - Submit to Epicodus.


## Known Bugs

There are no known bugs.

## Support and contact details

If you notice bugs or would like to contribute in any way please contact me at jaythinkshappiness@gmail.com

## Technologies Used

Ember
HTML
Javascript
jQuery
Node
Bower
JShint


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
