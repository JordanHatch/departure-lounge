# Departure Lounge

Display events from a Google Calendar in true airport style. Perfect for upcoming code deploys or all-staff meetings.

![](http://jordanhatch.github.io/departure-lounge/img/screenshot.png)

## Connecting to the Google Calendar API

Using the [Google API Console](https://code.google.com/apis/console/), you'll first need to create a [Service Account](https://developers.google.com/accounts/docs/OAuth2ServiceAccount). You'll then need to share the calendar you wish to use with the service account's email address.

## Configuration

The app requires the following environment variables to be set:

- `departure_lounge_issuer` - The email address for the Google API service account (eg. `xxxxxx@developer.gserviceaccount.com`)
- `departure_lounge_client_key` - The private key for the service account, as a base64-encoded string
- `departure_lounge_calendar_id` - The identifier for the calendar you wish to use (eg. `xxxxxx@group.calendar.google.com`)
- `departure_lounge_title` - The title of the dashboard.
- `departure_lounge_user` - The username used for basic authentication to access the calendar
- `departure_lounge_password` - A password used to protect the calendar


## Usage

To start the dashboard:

```
bundle install
bundle exec rackup -p 5000
````

Visit <http://localhost:5000> and use the username and password defined in the environment variables to access the dashboard.

## Typeface

For a more authentic airport feel, install the [CartoGothic Std](http://www.fontsquirrel.com/fonts/CartoGothic-Std) typeface.
