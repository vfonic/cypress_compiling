# How to reproduce webpacker compilation

1. In test env, webpacker stores packs in `public/packs-test`.

  Remove `public/packs-test` if present:
  
  ```sh
  rm -rf public/packs-test
  ```

2. Monitor for (compilation) logs in `log/test.log`:

  ```sh
  tail -F log/test.log
  ```

3. In another terminal session start Cypress:

  ```sh
  bundle exec rails cypress:open
  ```

4. Run `homepage.js` test


## Expected

Webpacker does not start compilation at this step.

## Actual

Webpacker starts compiling front-end assets.

<details><summary>Full output</summary>

```
$ rails cypress:run

cypress-rails configuration:
============================
 CYPRESS_RAILS_DIR....................."/Users/viktor/Developer/Ruby/cypress_compiling"
 CYPRESS_RAILS_PORT....................nil
 CYPRESS_RAILS_TRANSACTIONAL_SERVER....true
 CYPRESS_RAILS_CYPRESS_OPTS............""

Starting Puma...
* Version 4.3.3 , codename: Mysterious Traveller
* Min threads: 0, max threads: 4
* Listening on tcp://127.0.0.1:54469
mach_inject_bundle load_bundle_package: /Library/Application Support/MacEnhance/Plugins/Afloat.bundle

==============================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    4.3.0                                                                              │
  │ Browser:    Electron 80 (headless)                                                             │
  │ Specs:      1 found (homepage.js)                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  homepage.js                                                                     (1 of 1)


  Visiting home
    ✓ does not kick off webpack compilation (2179ms)


  1 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     homepage.js                                                                      │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /Users/viktor/Developer/Ruby/cypress_compiling/tmp/cypress_    (0 seconds)
                          videos/homepage.js.mp4


==============================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  homepage.js                              00:02        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:02        1        1        -        -        -
```

</details>

<details><summary>`log/test.log` output</summary>

```
   (0.1ms)  BEGIN
Started GET "/" for 127.0.0.1 at 2020-04-08 10:42:15 +0200
Processing by HomeController#index as HTML
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 1.3ms | Allocations: 202)
[Webpacker] Compiling...
[Webpacker] Compiled all packs in /Users/viktor/Developer/Ruby/cypress_compiling/public/packs-test
[Webpacker] Hash: ebd02f73d52e79a2fbf9
Version: webpack 4.42.1
Time: 452ms
Built at: 04/08/2020 10:42:17 AM
                                     Asset       Size       Chunks                         Chunk Names
    js/application-8e6399ca58541413e6bb.js   69.6 KiB  application  [emitted] [immutable]  application
js/application-8e6399ca58541413e6bb.js.map   79.4 KiB  application  [emitted] [dev]        application
                             manifest.json  384 bytes               [emitted]
Entrypoint application = js/application-8e6399ca58541413e6bb.js js/application-8e6399ca58541413e6bb.js.map
[./app/javascript/packs/application.js] 695 bytes {application} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 552 bytes {application} [built]
    + 2 hidden modules

Completed 200 OK in 1984ms (Views: 1981.3ms | ActiveRecord: 0.0ms | Allocations: 10828)
Started GET "/assets/application-d0ff5974b6aa52cf562bea5921840c032a860a91a3512f7fe8f768f6bbe005f6.css" for 127.0.0.1 at 2020-04-08 10:42:17 +0200
   (0.2ms)  ROLLBACK
```

</details>
