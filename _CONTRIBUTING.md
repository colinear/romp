# Contributing

## General Workflow

#### First Time Setup Steps:
1. Clone the master repository
1. Create a working branch (your name) on your local machine

#### Supposing the local repo is already set up

1. Checkout local master branch:  ```git checkout master```
1. Rebase local master branch using origin/master: ```git pull origin master --rebase``` Local master should now be identical to origin/master.
1. Checkout local working branch: ```git checkout <BRANCH NAME>```
1. Rebase local working branch using origin master: ```git pull origin master --rebase```
1. Do work on local working branch
1. Add and commit work on local working branch: ```git add <FILE>``` then ```git commit```
1. Rebase local working branch using origin master to ensure there are no conflicts: ```git pull origin master --rebase```
1. Push to your remote branch: ```git push origin <YOUR NAME BRANCH>```
1. Submit pull request to origin master branch
1. Once the pull request has been reviewed, it will be merged by another member of the team.
1. Checkout local master: ```git checkout master``` and pull the latest version once origin master has been updated.
1. Checkout local working branch ```git checkout <YOUR NAME>```


#### What to do if your branches are ahead from origin/master and you want to reset them to origin/master:
1. ```git checkout <BRANCH THAT NEEDS TO BE RESET>```
1. ``` git reset origin/master --hard```

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.


<!-- Links -->
[style guide]: https://github.com/reactorcore/style-guide
[n-queens]: https://github.com/reactorcore/n-queens
[Underbar]: https://github.com/reactorcore/underbar
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[cons of merge]: https://f.cloud.github.com/assets/1577682/1458274/1391ac28-435e-11e3-88b6-69c85029c978.png
[Bookstrap]: https://github.com/reactorcore/bookstrap
[Taser]: https://github.com/reactorcore/bookstrap
[tools workflow diagram]: http://i.imgur.com/kzlrDj7.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
