const router = require('express').Router();

const Friend = require('./friendModel.js');

router
  .route('/')//api/friends
  .get((req, res) => {
    Friend.find({})//will grab all friends
      .then(friends => {
        res.status(200).json(friends);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    const friend = new Friend(req.body);
    friend.save()
      .then(savedFriend => res.json(savedFriend))
      .catch(error => {
        res.status(500).json(error);
      });
  });

router
  .route('/:id')//api/friends
  .get((req, res) => {
    Friend.findById(req.params.id)
      .then(friend => {
        res.status(200).json(friend);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    const friend = new Friend(req.body);
    friend.save()
      .then(savedFriend => res.json(savedFriend))
      .catch(error => {
        res.status(500).json(error);
      });
  });

  module.exports = router;

/*Configure the following API endpoints:
                                                      
| GET | /api/friends /: id | Returns the friend object with the specified id.                                                                                    |
| DELETE | /api/friends /: id | Removes the friend with the specified id and returns the deleted friend.                                                            |
| PUT | /api/friends /: id | Updates the friend with the specified`id` using data from the`request body`.Returns the modified document, ** NOT the original **. |

#### Endpoint Specifications

When the client makes a`POST` request to`/api/friends`:

* If the request body is missing the`firstName`, `lastName` or`age` property:

  * cancel the request.
  * respond with HTTP status code`400`(Bad Request).
  * return the following JSON response: `{ errorMessage: "Please provide firstName, lastName and age for the friend." }`.

* If the value for `age` is not a number or it has a value that is less than 1 or more than 120:

  * cancel the request.
  * respond with HTTP status code`400`(Bad Request).
  * return the following JSON response: `{ errorMessage: "Age must be a number between 1 and 120" }`.

* If the information about the _friend_ is valid:

  * save the new _friend_ the the database.
  * return HTTP status code`201`(Created).
  * return the ** newly created ** _friend document_.

* If there's an error while saving the _friend_:
  * cancel the request.
  * respond with HTTP status code`500`(Server Error).
  * return the following JSON object: `{ errorMessage: "There was an error while saving the friend to the database." }`.

When the client makes a`GET` request to`/api/friends`:

* If there's an error retrieving the _friends_ from the database:
  * cancel the request.
  * respond with HTTP status code`500`.
  * return the following JSON object: `{ errorMessage: "The friends information could not be retrieved." }`.

- On success return status code`200`(OK) and the list of all friends contained in the friends collection.

When the client makes a`GET` request to`/api/friends/:id`:

* If the _friend_ with the specified`id` is not found:

  * return HTTP status code`404`(Not Found).
  * return the following JSON object: `{ message: "The friend with the specified ID does not exist." }`.

* If there's an error in retrieving the _friend_ from the database:
  * cancel the request.
  * respond with HTTP status code`500`.
  * return the following JSON object: `{ errorMessage: "The friend information could not be retrieved." }`.

When the client makes a`DELETE` request to`/api/friends/:id`:

* If the _friend_ with the specified`id` is not found:

  * return HTTP status code`404`(Not Found).
  * return the following JSON object: `{ message: "The friend with the specified ID does not exist." }`.

* If there's an error in removing the _friend_ from the database:
  * cancel the request.
  * respond with HTTP status code`500`.
  * return the following JSON object: `{ errorMessage: "The friend could not be removed" }`.

When the client makes a`PUT` request to`/api/friends/:id`:

* If the _friend_ with the specified`id` is not found:

  * return HTTP status code`404`(Not Found).
  * return the following JSON object: `{ message: "The friend with the specified ID does not exist." }`.

* If the request body is missing the`firstName`, `lastName` or`age` property:

  * cancel the request.
  * respond with HTTP status code`400`(Bad Request).
  * return the following JSON response: `{ errorMessage: "Please provide firstName, lastName and age for the friend." }`.

* If the value for `age` is not a number or it has a value that is less than 1 or more than 120:

  * cancel the request.
  * respond with HTTP status code`400`(Bad Request).
  * return the following JSON response: `{ errorMessage: "Age must be a number between 1 and 120" }`.

* If there's an error when updating the _friend_:

  * cancel the request.
  * respond with HTTP status code`500`.
  * return the following JSON object: `{ errorMessage: "The friend information could not be modified." }`.

* If the friend is found and the new information is valid:

  * update the friend document in the database using the new information sent in the`reques body`.
  * return HTTP status code`200`(OK).
  * return the newly updated _friend document_.*/