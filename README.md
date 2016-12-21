# owg-website

This repository holds the website for the OSMF Operations Working Group. We're using a git repo since that's what we're used to. It also allows other people to make pull requests if they want to, sidesteps permissions issues on wikis, and generally just lowers the bar to contribution.

The website contains our monthly reports to the OSMF Board, our policies, and our meeting notes. You can view the website at [operations.osmfoundation.org](https://operations.osmfoundation.org)

## Contributing to the website

We welcome contributions to our website! Your suggestions will be reviewed by the team and merged where appropriate.

### Via github.com

When you're viewing a page, just click on the "Edit" button on the github.com UI, and submit a pull request.

### Via prose.io

You can also edit the reports using [prose.io](http://prose.io/), if you'd prefer a wysiwyg editor

### Via git

You can clone this repo and make changes locally, if you prefer. All the work happens on the gh-pages branch.

To preview your changes, install the dependencies with

```
bundle install
```

and then run

```
bundle exec jekyll serve -w
```
The site is then available at http://localhost:4000/ and will update automatically when you change any files.
