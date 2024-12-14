
# RegEx Validator PCF Control

This repository provides a custom **PowerApps Component Framework (PCF)** control to validate and manipulate text using regular expressions. The control is designed to simplify complex text processing within PowerApps for both citizen and pro developers.

---

## Features

- Accepts **input text** and applies custom **regular expressions**.
- Displays the processed output in a styled label.
- Truncates long text with ellipses (`...`) if it exceeds the specified width.
- Fully customizable styles for label rendering.
- Compatible with canvas and model-driven apps.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Building and Deploying](#building-and-deploying)
5. [Examples](#examples)
6. [Contributing](#contributing)
7. [License](#license)

---

## Getting Started

### Prerequisites

1. [Node.js](https://nodejs.org/) (>=14.x)
2. [Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/overview)
3. A PowerApps environment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-repo-name>/regex-validator-pcf.git
   cd regex-validator-pcf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Add the control to your PowerApps environment using the Power Platform CLI.

2. In the PowerApps editor:
   - Bind the `LabelText` property to the input text.
   - Bind the `RegEx` property to the regular expression you want to apply.

3. Example configuration:
   - **LabelText:** `Sample Input Text`
   - **RegEx:** `LabelText.replace(/[^a-zA-Z0-9\s]/g, '')`  
     (This regex removes all special characters except spaces.)

---

## Configuration

### Properties

| Property       | Type          | Description                                         |
|----------------|---------------|-----------------------------------------------------|
| **LabelText**  | String        | The input text to be processed.                    |
| **RegEx**      | String (JS)   | The regular expression to apply.                   |
| **RegExValidatorOutput** | String        | The processed output text, usable in other controls.|

### Styling Recommendations
To customize the appearance of the output text without modifying the code:
1. Add an HTMLText control in PowerApps.
2. Bind the control to the output property (`RegExValidator.RegExValidatorOutput`).
3. Apply custom CSS styles.
   
This approach allows you to apply different styles dynamically within PowerApps without needing to alter the PCF code.

---

## Building and Deploying

1. Build the solution:
   ```bash
   npm run build
   ```

2. Pack the solution:
   ```bash
   pac pcf push
   ```

3. Import the control into your PowerApps environment and use it.

---

## Examples

### Example 1: Remove Non-Alphanumeric Characters

**Input:**
- LabelText: `Hello, World! 123`
- RegEx: `LabelText.replace(/[^a-zA-Z0-9\s]/g, '')`

**Output:**
- `Hello World 123`

### Example 2: Format Phone Numbers

**Input:**
- LabelText: `1234567890`
- RegEx: `LabelText.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')`

**Output:**
- `(123) 456-7890`

---

## Contributing

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the [https://github.com/afrose-97/RegExValidator/blob/master/LICENSE.txt](LICENSE) file for details.

---

### Questions or Feedback?

Feel free to open an issue in the repository or contact the maintainer for any questions or feedback.
