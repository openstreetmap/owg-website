# owg-log

This repository holds the logs for the operatiosn working group. We're using a git repo since that's what we're used to. It also allows other people to make pull requests if they want to, sidesteps permissions issues on wikis, and generally just lowers the bar to contribution.

## Contributing reports

The reports are organised per calendar month, and are found in the [_posts](_posts) directory.

### Via github.com

When you're viewing a report, just click on the "Edit" button on the github.com UI, and submit a pull request.

### Via prose.io

You can also edit the reports using prose.io, if you'd prefer a wysiwyg editor

### Via git

You can clone this repo and make changes locally, if you prefer. All the work happens on the gh-pages branch.

To preview your changes, install the dependencies with

```
bundle install
```

and then run

```
jekyll serve -w --baseurl ''
```
The site is then available at http://localhost:4000/ and will update automatically when you change any files.
