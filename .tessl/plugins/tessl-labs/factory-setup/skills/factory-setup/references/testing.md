# Testing the factory

Test only the parts the user set up. Pick a test the user is comfortable
with. If they have a real ticket or job in mind and it is small, use that.
If not, propose a small, safe change, such as a README fix. Ask before you
create each issue or comment, because people on the repo will see them.

Before each wait, tell the user how long it usually takes (a run starts
about 90 seconds after the event and takes 5 to 10 minutes), and where to
watch it: the run in the loop's page in the Tessl web app. If the web app and
these checks disagree, trust the web app and say so.

1. **Check the loops exist.** Ask the user to open the project's Loops tab in
   the Tessl web app and confirm the new loops are there. If they are missing,
   check that the merge was to the default branch and that the environment
   name in `tessl.json` matches the environment you created.
2. **Ship tickets.** Use the ticket you agreed on. Then:
   - GitHub Issues: `gh issue create` with that change, then
     `gh issue edit <n> --add-label tessl`.
   - Linear: create the issue in the routed team, delegate it to Tessl, and
     leave it in Todo.

   Within a few minutes the issue gets a "Tessl is working on this" comment,
   then a pull request on a `tessl/` branch with the `tessl` label.

3. **Keep pull requests moving.** When this automation is configured, use the
   pull request from the preceding step or any open pull request that Tessl
   opened. If there is no such pull request:
   - When "ship tickets" is configured, ask permission to file a small new
     ticket as in step 2, then use the pull request it produces.
   - Otherwise, do not file a ticket. Tell the user this test needs a pull
     request that Tessl opened, and leave the test until another configured
     automation opens one.

   Immediately before leaving a review comment that asks for one small change,
   record the latest commit and the review comment count. Keep the new comment's
   ID after posting it. Within a few minutes the agent replies in that comment's
   thread, pushes the change, and resolves the thread. Reusing the pull request
   from the preceding step tests both automations without creating a second
   ticket or setup change.

4. **Code Review.** Confirm the review appears on the pull request.
5. **Own skill or schedule.** For a trigger, make the event happen once, for
   example file a test ticket. For a schedule, run it once now with
   `tessl schedule trigger <id>`, with the id from `tessl schedule list`.
   After each test run, use its launch run ID with `tessl launch view <id>` and
   report the actual credit cost shown. If the run ID was not printed, find the
   newest run with `tessl launch list` first. Then show the user what the agent
   did.

To wait, run one of these checks once a minute. If foreground `sleep` is
blocked, start a single bounded background loop that runs the relevant check
once a minute and stops after 10 minutes. Stop the loop when the condition is
met. Tessl's own comments end with `<!-- tessl-factory -->`, so match on that,
not on the author.

- **Started:** the issue has a comment that contains `tessl-factory`.
- **Pull request opened:**
  `gh pr list --state all --search "head:tessl/issue-<n>" --json number,url`.
  For Linear, the branch is `tessl/<identifier in lowercase>`.
- **Keep pull requests moving replied:** the review comment count increased and
  the new reply's `in_reply_to_id` matches the test comment's ID.
- **Keep pull requests moving pushed:** the pull request's latest commit differs
  from the commit recorded immediately before the test comment.

Report the issue and pull request links to the user. If nothing happens after
10 minutes, ask the user to open the loop in the web app and check its runs.

In the recap, report the organization's remaining credits from
`credits.remaining` in `tessl org list --json`. Do not estimate how many runs
are left.
