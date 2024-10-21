# StrCal

StrCal is a simple string calculator tool that performs an addition of positive digits in a string.

## Table of Contents

- [StrCal architecture](#strcal-architecture)
- [Local setup](#local-setup)
  - [Pre requisites](#pre-requisites)
  - [Installation](#installation)
  - [Run test suite](#run-test-suite)
- [User guide](#user-guide)

### <a id="strcal-architecture">StrCal architecture</a>

StrCal is a Full stack application which uses React for frontend, and Ruby on Rails for backend.

### <a id="local-setup">Local setup</a>

- #### <a id="pre-requisites">Pre requisites</a>

  1. Ruby version: 3.3.5
  2. Node version: 18.18.0

- #### <a id="installation">Installation</a>

  1. Make sure the pre-requisites are installed.
  2. Open a terminal.
  3. Clone the repository by running command:
     `git clone git@github.com:PrasadAdv/strcal.git`
  4. Navigate inside the cloned repository folder.
  5. Run following commands one by one.

  ```
  bundle install
  npm install
  bundle exec rails s
  ./bin/shakapacker-dev-server
  ```

  6. The Application is running on http://127.0.0.1:3000/ . You are ready to explore.

- #### <a id="run-test-suite">Run test suite</a>
  To run test cases, run the command `bundle exec rspec`.

### <a id="user-guide">User guide</a>

Please visit [StrCal User guide](././doc/user_guide.md) to know how StrCal works.
