export const fail = {
  numFailedTestSuites: 1,
  numFailedTests: 1,
  numPassedTestSuites: 3,
  numPassedTests: 3,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 4,
  numTotalTests: 4,
  openHandles: [],
  snapshot: {
    added: 0,
    didUpdate: false,
    failure: false,
    filesAdded: 0,
    filesRemoved: 0,
    filesRemovedList: [],
    filesUnmatched: 0,
    filesUpdated: 0,
    matched: 1,
    total: 1,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 0,
    updated: 0,
  },
  startTime: 1656555525626,
  success: false,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: [],
          duration: 19,
          failureMessages: [],
          fullName: "renders homepage unchanged",
          location: null,
          status: "passed",
          title: "renders homepage unchanged",
        },
      ],
      endTime: 1656555526224,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/snapshot.tsx",
      startTime: 1656555525922,
      status: "passed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["Home"],
          duration: 30,
          failureMessages: [],
          fullName: "Home renders a heading",
          location: null,
          status: "passed",
          title: "renders a heading",
        },
      ],
      endTime: 1656555526378,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/index.test.tsx",
      startTime: 1656555526233,
      status: "passed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["TextSwitch"],
          duration: 3,
          failureMessages: [
            "TestingLibraryElementError: Unable to find an element with the text: someoane. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.\n\nIgnored nodes: comments, <script />, <style />\n\u001b[36m<body>\u001b[39m\n  \u001b[36m<div>\u001b[39m\n    \u001b[36m<p>\u001b[39m\n      \u001b[0msomeone\u001b[0m\n    \u001b[36m</p>\u001b[39m\n  \u001b[36m</div>\u001b[39m\n\u001b[36m</body>\u001b[39m\n    at Object.getElementError (/Users/vgrafe/Code/with-jest-app/node_modules/@testing-library/dom/dist/config.js:40:19)\n    at /Users/vgrafe/Code/with-jest-app/node_modules/@testing-library/dom/dist/query-helpers.js:90:38\n    at /Users/vgrafe/Code/with-jest-app/node_modules/@testing-library/dom/dist/query-helpers.js:62:17\n    at /Users/vgrafe/Code/with-jest-app/node_modules/@testing-library/dom/dist/query-helpers.js:111:19\n    at Object.getByText (/Users/vgrafe/Code/with-jest-app/__tests__/TextSwitch.test.tsx:7:19)\n    at Promise.then.completed (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/utils.js:333:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/utils.js:259:10)\n    at _callCircusTest (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/run.js:277:40)\n    at _runTest (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/run.js:209:3)\n    at _runTestsForDescribeBlock (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/run.js:97:9)\n    at _runTestsForDescribeBlock (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/run.js:91:9)\n    at run (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/run.js:31:3)\n    at runAndTransformResultsToJestFormat (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:135:21)\n    at jestAdapter (/Users/vgrafe/Code/with-jest-app/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:92:19)\n    at runTestInternal (/Users/vgrafe/Code/with-jest-app/node_modules/jest-runner/build/runTest.js:411:16)\n    at runTest (/Users/vgrafe/Code/with-jest-app/node_modules/jest-runner/build/runTest.js:499:34)",
          ],
          fullName: "TextSwitch renders something",
          location: null,
          status: "failed",
          title: "renders something",
        },
      ],
      endTime: 1656555526515,
      message:
        '  ● TextSwitch › renders something\n\n    TestingLibraryElementError: Unable to find an element with the text: someoane. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.\n\n    Ignored nodes: comments, <script />, <style />\n    \u001b[36m<body>\u001b[39m\n      \u001b[36m<div>\u001b[39m\n        \u001b[36m<p>\u001b[39m\n          \u001b[0msomeone\u001b[0m\n        \u001b[36m</p>\u001b[39m\n      \u001b[36m</div>\u001b[39m\n    \u001b[36m</body>\u001b[39m\n\n       5 |   it("renders something", () => {\n       6 |     render(<TextSwitch />);\n    >  7 |     expect(screen.getByText("someoane")).toBeInTheDocument();\n         |                   ^\n       8 |   });\n       9 |\n      10 |   // it("renders someone", () => {\n\n      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:40:19)\n      at Object.getByText (__tests__/TextSwitch.test.tsx:7:19)\n',
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/TextSwitch.test.tsx",
      startTime: 1656555526388,
      status: "failed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["TextSwitch2"],
          duration: 2,
          failureMessages: [],
          fullName: "TextSwitch2 renders something",
          location: null,
          status: "passed",
          title: "renders something",
        },
      ],
      endTime: 1656555526633,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/TextSwitch2.test.tsx",
      startTime: 1656555526537,
      status: "passed",
      summary: "",
    },
  ],
  wasInterrupted: false,
};

export const success = {
  numFailedTestSuites: 0,
  numFailedTests: 0,
  numPassedTestSuites: 4,
  numPassedTests: 4,
  numPendingTestSuites: 0,
  numPendingTests: 0,
  numRuntimeErrorTestSuites: 0,
  numTodoTests: 0,
  numTotalTestSuites: 4,
  numTotalTests: 4,
  openHandles: [],
  snapshot: {
    added: 0,
    didUpdate: false,
    failure: false,
    filesAdded: 0,
    filesRemoved: 0,
    filesRemovedList: [],
    filesUnmatched: 0,
    filesUpdated: 0,
    matched: 1,
    total: 1,
    unchecked: 0,
    uncheckedKeysByFile: [],
    unmatched: 0,
    updated: 0,
  },
  startTime: 1656554973140,
  success: true,
  testResults: [
    {
      assertionResults: [
        {
          ancestorTitles: [],
          duration: 24,
          failureMessages: [],
          fullName: "renders homepage unchanged",
          location: null,
          status: "passed",
          title: "renders homepage unchanged",
        },
      ],
      endTime: 1656554973707,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/snapshot.tsx",
      startTime: 1656554973433,
      status: "passed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["Home"],
          duration: 31,
          failureMessages: [],
          fullName: "Home renders a heading",
          location: null,
          status: "passed",
          title: "renders a heading",
        },
      ],
      endTime: 1656554973844,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/index.test.tsx",
      startTime: 1656554973717,
      status: "passed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["TextSwitch"],
          duration: 2,
          failureMessages: [],
          fullName: "TextSwitch renders something",
          location: null,
          status: "passed",
          title: "renders something",
        },
      ],
      endTime: 1656554973958,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/TextSwitch.test.tsx",
      startTime: 1656554973852,
      status: "passed",
      summary: "",
    },
    {
      assertionResults: [
        {
          ancestorTitles: ["TextSwitch2"],
          duration: 4,
          failureMessages: [],
          fullName: "TextSwitch2 renders something",
          location: null,
          status: "passed",
          title: "renders something",
        },
      ],
      endTime: 1656554974065,
      message: "",
      name: "/Users/vgrafe/Code/with-jest-app/__tests__/TextSwitch2.test.tsx",
      startTime: 1656554973964,
      status: "passed",
      summary: "",
    },
  ],
  wasInterrupted: false,
};
