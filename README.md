# Departure Lounge

Display events from a Google Calendar in true airport style. Perfect for upcoming code deploys or all-staff meetings.

![](http://jordanhatch.github.io/departure-lounge/img/screenshot.png)

## Connecting to the Google Calendar API

Using the [Google API Console](https://code.google.com/apis/console/), you'll first need to create a [Service Account](https://developers.google.com/accounts/docs/OAuth2ServiceAccount). You'll then need to share the calendar you wish to use with the service account's email address.

## Configuration

The app requires the following environment variables to be set:

- `govuk_issuer` - The email address for the Google API service account (eg. `xxxxxx@developer.gserviceaccount.com`)
- `govuk_client_key` - The private key for the service account, as a base64-encoded string
- `govuk_calendar_id` - The identifier for the calendar you wish to use (eg. `xxxxxx@group.calendar.google.com`)
- `govuk_password` - A password used to protect the calendar (uses HTTP basic auth)

## Usage

To start the dashboard:

```
bundle install
bundle exec rackup -p 5000
````

Visit <http://localhost:5000> and use the username `govuk` with the password defined in the `govuk_password` environment variable.

## Typeface

For a more authentic airport feel, install the [CartoGothic Std](http://www.fontsquirrel.com/fonts/CartoGothic-Std) typeface.
