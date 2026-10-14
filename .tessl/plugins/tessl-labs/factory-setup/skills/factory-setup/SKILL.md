---
name: factory-setup
description: >-
  Set up, explain, or change a Tessl factory on a repository: agents that act
  on events in the repo, such as triaging new tickets, shipping tickets as
  pull requests, keeping pull requests moving, reviewing code, or running a
  job on a schedule. Use when someone wants Tessl agents to do work in their
  repo, asks what a factory is or what theirs does, or wants to add to,
  change, or customize it.
---

# Factory setup

A factory is a set of automations on a repository. Each one is a rule: when
something happens (a ticket is filed, a pull request gets a review, a time of
day arrives), a Tessl agent runs a skill in the cloud and does one job.

Your job is to help the user pick the first automation that is useful to
them, set it up safely, show it working, and then help them see what else
they could add. Fit the factory to how the user works. Do not assume they use
pull requests, Linear, or any other tool until you have checked.

Rules for the whole session:

- Ask about one thing at a time.
- Use plain words. See [Plain words](#plain-words).
- Change nothing in the repository, the Tessl workspace, or GitHub until the
  user has said yes in step 1.
- Use `--workspace <workspace>` only with these Tessl commands:
  `project link`, `project create`, and `integrations show linear`.
- Do not pass it to `tessl doctor` or `tessl install`. `gh` and `git` commands
  do not take it.

## 1. Orient the user

Before you run anything that changes state, tell the user in a few short
sentences:

1. What a factory is (the paragraph at the top, in your own words).
2. Three or four examples from [the starter automations](references/starters.md)
   that could fit this kind of repository.
3. What setup will create: a Tessl project linked to the repo, one cloud
   environment for the agents, the Tessl GitHub App on this repo, a few
   entries in `tessl.json`, and maybe a label.
4. That runs use Tessl credits, and link to [Tessl pricing](https://tessl.io/pricing/)
   for current details.
5. That every automation can be turned off by removing it from `tessl.json`.

Then ask: "Do you want to go ahead?" Stop if they say no.

## 2. Preflight

1. Check that the Tessl CLI is up to date. Run `tessl cli update --dry-run`.
   If it reports an available update, tell the user to run
   `tessl cli update` and stop. Do not run `tessl update`: that updates plugins,
   not the CLI. If the version check fails, tell the user to resolve the CLI
   update before continuing.
2. Work from the repository root. Confirm that the folder is a Git repository
   with a GitHub remote. If it is not a Git repository, or has no GitHub remote,
   tell the user that automations run against a GitHub repository. Ask whether
   to point at an existing repository or create one. Stop without changing
   anything until the user chooses.
3. If there is no `tessl.json`, tell the user to run `tessl init` and stop.
4. Run `git status`. If there are uncommitted changes, say so and ask the user
   to commit them or put them aside before you continue. Do not move or stash
   them yourself.
5. Run `tessl whoami`. If it fails, ask the user to run `tessl login`.
6. Run `tessl project repair --json`. The workspace is
   `linkedProject.workspaceName`. If there is no linked project, ask which
   workspace to use, then run `tessl project link --workspace <workspace>`, or
   `tessl project create --workspace <workspace>` if no project matches.
7. Run `tessl org list --json`. If the organization's `credits.state` is not
   `ok`, tell the user that factory runs will not start until the
   organization has credits, and ask whether to continue.
8. Find the GitHub repo (`gh repo view --json nameWithOwner`). Check that the
   Tessl GitHub App can write to it: `tessl integrations show github-app-agent`
   and the exit status of `tessl github token --repo <owner/repo>`. Run the
   token check with both output streams redirected to `/dev/null`, and use only
   its exit status. Never capture, print, log, or repeat its output because it
   contains a live installation token. If either check fails, give the user the
   link that `tessl integrations show github-app-agent` prints after
   "Install it at:". If it prints no link, send them to the organization
   settings, under Integrations, GitHub. Ask them to install the Tessl GitHub
   App there, or, if it is already installed, to grant it access to this
   repository. Say that it asks for read and write access so agents can
   comment, push branches, and open pull requests. Wait until they say it is
   done.

## 3. Learn how the user works

Read before you ask:

- `CLAUDE.md`, `AGENTS.md`, and `CONTRIBUTING.md`, for rules about branches,
  pull requests, and releases.
- `git log --first-parent -30 <default branch>`. Merge commits mean work
  arrives through pull requests. Plain commits mean people push to the
  default branch.
- `gh pr list --state merged --limit 10` and
  `gh api repos/<owner>/<repo>/rules/branches/<default branch>`.
- Where tickets live: open GitHub issues (`gh issue list --limit 5`), or a
  Linear connection (`tessl integrations show linear --json`).
- CI: the files in `.github/workflows/`.
- What a cloud run needs to build and test: package manifests, lockfiles,
  toolchain files, and the install steps in CI.

Tell the user what you found in two or three sentences, for example "You push
straight to main, file GitHub issues, and have no CI." Ask them to correct
it. If there are no open GitHub issues and either no Linear connection or no
open Linear issues, recommend a small, safe first ticket, such as a README
fix, and ask: "Want me to file a small first ticket, such as adding a README,
and show it working?" Otherwise, ask: "Is there one thing you want Tessl to
take off your plate first?" Do not create an issue until the user says yes.
If the repository needs tools or dependencies installed to build or test, tell
the user which ones. Say that Tessl runs `.tessl/cloud-launch-setup.sh` before
every cloud run, and offer to write it to install them safely more than once.
Ask before writing the hook. Do not mention the hook when the repository needs
no setup.

## 4. Show the current factory

Read `tessl.json`. Find the `actions`, `triggers`, and `schedules`, and the
environments they use (`tessl environment view <env>`). Check Code Review with
`tessl integrations show github-app-code-review`.

If nothing is set up, say so and go to step 5.

If something is set up, tell the user in plain words which automations are
on, what starts each one, and which skills are their own copies. Then
suggest one or two automations from [the starters](references/starters.md)
that fit what they already have and how they work, and say what each would
save them. For example: "Tessl already ships your labelled issues. A triage
automation could read each new issue and add the label when the issue is
small and clear." Ask what they want to do: add an automation, remove one,
change what starts one, or [edit a skill](references/customize.md). If they
want to add an automation, go to step 5. Steps 1 to 3 have already run; do not
repeat them. In step 6, reuse the environment the existing actions use.

## 5. Pick the first automation

Set up the first automation, with one exception: whenever "ship tickets" is
the starter being set up, offer "keep pull requests moving" at the same time.

- If the user named a goal in step 3, set up the starter that meets it.
- If not, offer two or three starters from [the starters](references/starters.md)
  that fit how they work, each in one sentence, with your recommendation
  first.
- If they push straight to the default branch, do not offer automations that
  need a pull request on every change. Offer the ones that work without pull
  requests, and say that "ship tickets" opens one pull request per ticket.
  "Keep pull requests moving" acts only on pull requests Tessl opens, so offer
  it with "ship tickets" even for these users.
- If they want something no starter covers, follow
  [Write your own automation](references/starters.md#write-your-own-automation).

Whenever "ship tickets" is the starter being set up, first say what it does in
plain words: what starts it, what the agent does, what it changes, and how to
stop it. Then explain that "keep pull requests moving" acts only on pull
requests Tessl opens: it answers review comments, fixes failing checks, and says
when the pull request is ready to merge. Ask whether they want both. Set up both
only after they say yes; if they say no, set up "ship tickets" alone. When both
are chosen, add both automations in one `tessl.json` change and show both working
in the test step.

For every other starter, before you build it, say what it does in the same
plain terms and ask: "Is this what you want?"

## 6. Create the environment

Use one environment named `<repo>-factory`. If it exists, show its access and
ask before you change it. If not, create it with the access that the chosen
starter lists. When both "ship tickets" and "keep pull requests moving" are
chosen, use this one environment for both. Both need `--github-access write`.
For Linear, also keep `--linear-access write`, because the agent keeping pull
requests moving reads the Linear issue:

`tessl environment create <repo>-factory <flags>`, then confirm it with
`tessl environment view <repo>-factory`.

If `tessl environment create --help` has no flag that the starter needs, ask
the user to create the environment in the web app, under workspace settings,
Environments, with that access.

## 7. Write tessl.json

1. Pick where the change goes. Fetch the remote default branch first, and
   start any branch from it, not from a local copy that may be out of date.
   Name the branch `setup-tessl-factory`. If that name already exists locally
   or on the remote, name it after the starter being added:
   `add-tessl-ship-tickets`, `add-tessl-keep-prs-moving`, or `add-tessl-<name>`
   in lowercase words joined by hyphens for any other starter. If that name
   exists too, add `-2`, `-3`, and so on until the name is free.
   - If the user works through pull requests, create that branch and make
     every file change on it.
   - If the user pushes straight to the default branch, ask whether to commit
     there or use that branch.
2. Add the entries that the chosen starter lists. If both "ship tickets" and
   "keep pull requests moving" were chosen, point both actions at the same
   environment and add their triggers in this one change. Keep every other key
   in the file.
3. If the user agreed to the setup hook in step 3, add
   `.tessl/cloud-launch-setup.sh` in the same change. It runs from the clone
   root before every cloud run, and its install steps must be safe to run more
   than once. Make every required setup failure stop the hook with a non-zero
   exit, for example by using `set -e` or checking each command's exit status.
4. If the starter uses a label, create it if it is missing, for example
   `gh label create tessl`.
5. If the starter works on pull requests, check the branch rules from step 3,
   auto-merge, and "dismiss approvals on push". Tell the user how each one
   changes what the automation does. If the default branch requires an
   approving review, also warn that `Comment only` Code Review mode cannot
   satisfy that rule. `tessl integrations show github-app-code-review` only
   confirms the integration, not its per-repository publication mode, so treat
   an unreadable mode as unknown and say that Tessl pull requests will wait for
   a human approval. Tell the user to open **Code reviews**, select the
   repository, and choose **Approve or request changes** if they want Tessl's
   review to satisfy the rule. Change nothing without asking.
6. Run `tessl doctor --automations`. Act only on the Automation Configuration
   section; ignore every other section. Fix problems in that section. Tell the
   user what each warning means for them, not what it says. For example, "event
   delivery not confirmed" means "Tessl has not received a GitHub event from
   this repo yet. This is normal until the change is on the default branch."
   If it reports `Model "claude-opus-5-5" is not available to agent "claude" in this workspace.`, remove `model` from the factory actions, then run `tessl doctor --automations` again. If it then reports `The workspace organization has no default model configured for cloud-run-solver.`, stop and tell the user that their model provider needs a default for cloud runs or that they can set `model` to a model their provider enables. The local configuration passes when this section reports that `tessl.json` is valid and lists no configuration problems. Do not take the setup live while Agent selections or Event delivery is Undetermined; those online readiness checks must run successfully. When "keep pull requests moving" is set up, doctor always reports the `shepherd-checks-failed` and `shepherd-checks-passed` triggers as events that cannot be marked. These Information lines are not problems, and they do not block going live. Tell the user what they mean: runs that start when a check finishes leave no mark on GitHub, so watch them in the Loops tab.
7. Show the user the diff and say in one sentence what each entry does.

## 8. Go live and show it working

1. Ask: "Do you want me to push this?" If yes, push the commit, or commit on
   the setup branch and open a pull request. The automations start only
   once `tessl.json` is on the default branch.
2. When it is on the default branch, send the user to the project's Loops tab
   in the Tessl web app. Say which loops they will see and what starts each.
3. Ask: "Do you want me to show you it working?" If yes, follow
   [Testing the factory](references/testing.md).

## 9. Recap and suggest what is next

Tell the user:

- Which automations are on, what starts each one, and the link to its loop.
- How to stop one: say the "Stop it" line for each automation that is on, from
  [the starters](references/starters.md). Removing an automation takes effect
  only once the change is on the default branch, and it stops new runs, not
  one in progress.
- One or two automations from [the starters](references/starters.md) that
  would fit next, and what each would save them. Ask if they want to add one
  now. If they do, run `git status` as in step 2, then go back to step 5 for
  the new starter. The Tessl project and GitHub App already exist; step 6
  reuses the environment.

## Plain words

Say the plain words. If a command or screen shows the Tessl term, say what it
means in one line.

| Plain words                                                                           | Tessl term            |
| ------------------------------------------------------------------------------------- | --------------------- |
| automation                                                                            | loop, trigger, action |
| cloud environment: the machine and access the agent gets                              | environment           |
| check the setup                                                                       | `tessl doctor`        |
| review rules: what Code Review looks for                                              | lens                  |
| keep pull requests moving: answer review comments, fix failing checks                 | shepherd              |
| wait time: Tessl waits about 90 seconds after an event, so quick events start one run | debounce              |
