# Contributing to Kharcha Tracker UI

Thank you for considering contributing to Kharcha Tracker UI! Contributions help improve and enhance the user interface of the application. Before getting started, please take a moment to review the following guidelines.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Code Style](#code-style)
- [Submitting Pull Requests](#submitting-pull-requests)

> **Note:** This repository is specifically for UI-related changes. For backend-related changes, please refer to the [Kharcha Tracker Backend](https://github.com/piyush7199/kharcha-tracker) repository.

## How to Contribute

1. **Fork the Repository on GitHub:**

   - Visit the Kharcha Tracker UI repository on GitHub: [https://github.com/piyush7199/kharcha-tracker-UI](https://github.com/piyush7199/kharcha-tracker-UI).
   - Click on the "Fork" button in the top right corner to create a copy of the repository in your GitHub account.

2. **Clone Your Forked Repository:**

   - Open a terminal or command prompt on your local machine.
   - Run the following command to clone the repository to your machine:

     ```bash
     git clone https://github.com/piyush7199/kharcha-tracker-UI
     ```

3. **Create a New Branch:**

   - Change into the project's directory:

     ```bash
     cd kharcha-tracker-UI
     ```

   - Create a new branch for your contribution. The branch name should be descriptive of the changes you are making:

     ```bash
     git checkout -b feature-or-fix-name
     ```

4. **Make Changes and Test:**

   - Make the necessary changes to the UI components.
   - Test your changes to ensure they work as expected.

5. **Commit Your Changes:**

   - Commit your changes with a clear and descriptive commit message:

     ```bash
     git add .
     git commit -m "Your descriptive commit message"
     ```

6. **Push Changes to Your Fork:**

   - Push the changes to the branch you created in your forked repository:

     ```bash
     git push origin feature-or-fix-name
     ```

7. **Open a Pull Request:**
   - Visit your fork on GitHub: [https://github.com/piyush7199/kharcha-tracker-UI](https://github.com/piyush7199/kharcha-tracker-UI).
   - Click on the "New Pull Request" button.
   - Ensure that the base repository is set to `piyush7199/kharcha-tracker-UI` and the base and compare branches are appropriately selected.
   - Write a clear and detailed pull request description.
   - Click on the "Create Pull Request" button.

## Setting Up the Development Environment

Make sure you have Node.js and npm installed on your machine. You can download them from:

- [Node.js](https://nodejs.org/)

## Environment Variables

Kharcha Tracker App uses several environment variables for configuration. These variables should be set based on your local development environment or deployment settings. Make sure to configure the following variables:

- **`REACT_APP_BASEURL`**: The URL for the backend service.

## Code Style

Follow these code style guidelines when contributing to the Kharcha Tracker UI. Consistent code style helps maintain a clean and visually appealing user interface.

### General Guidelines

- **Consistent Styling:**

  - Follow the existing styling conventions used in the project.
  - Example:

    ```jsx
    const loginContainerStyle = {
      minHeight: "94vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // ... other styles
    };

    const buttonStyle = {
      bg: COLORS.MAIN_COLOR,
      // ... other styles
    };

    // ... other component styles
    ```

- **Descriptive Variable Names:**

  - Use descriptive variable names for styles and components.

- **Reusable Components:**

  - Encapsulate reusable UI components for consistency and maintainability.

### Component Structure

- **Logical Structure:**

  - Organize the components in a logical structure.
  - Example:

    ```jsx
    const LoginPage = ({ setIsVerified, isUserAuthenticated }) => {
      // ... component logic
    };

    export default LoginPage;
    ```

- **Proper Component Names:**

  - Use meaningful and self-explanatory names for components.

## Submitting Pull Requests

When submitting a pull request, please ensure the following:

1. **Descriptive Title:**

   - Provide a clear and descriptive title for your pull request. It should succinctly describe the purpose of the UI changes.

2. **Detailed Description:**

   - Write a detailed description of the changes introduced by your pull request. Explain the purpose and any visual enhancements.

3. **Include Screenshots (if applicable):**

   - If your changes include visual modifications, consider including screenshots to showcase the UI improvements.

4. **Follow Code Style:**

   - Ensure that your code follows the established code style guidelines. Consistent code style helps maintain a visually appealing UI.

5. **Resolve Conflicts:**

   - If there are conflicts with the base branch, resolve them before submitting the pull request.

6. **Review and Discussion:**

   - Be open to feedback and participate in discussions related to your pull request. Respond promptly to any comments or suggestions.

7. **CI/CD Checks:**

   - Ensure that your changes pass any continuous integration (CI) checks set up for the repository.

8. **Squash Commits:**

   - Consider squashing multiple commits into a single, coherent commit before merging. This helps maintain a clean and organized git history.

9. **Rebase on the Latest:**

   - Before finalizing your pull request, rebase your branch on the latest changes from the base branch to avoid merge conflicts.

10. **Assignees and Labels:**

- Assign relevant team members as reviewers and add appropriate labels to your pull request.

Once your pull request meets these criteria, click on the "Create Pull Request" button. Your changes will be reviewed, and if approved, merged into the main codebase.

Thank you for your contribution!

Happy Coding!!
