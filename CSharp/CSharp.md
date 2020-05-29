# C# Development in Visual Studio Code

- [Install Visual Studio Code](https://code.visualstudio.com/)
- [Install .Net Core SDK](https://dotnet.microsoft.com/download)
- [Install C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp>)

## Other Helpful Extensions

- [Auto-Using for C#](https://marketplace.visualstudio.com/items?itemName=Fudge.auto-using) : Auto-imports and provides intellisense for references that were not yet imported in a C# file.
- [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer) : Provides visual hierarchy of the tests. This requires NUnit and MSTest requires a dotnet sdk version of >= 2.2.104 and running dotnet tooling
- [NuGet Package Manager](https://marketplace.visualstudio.com/items?itemName=jmrog.vscode-nuget-package-manager) : An extension for Visual Studio Code that lets you easily add or remove .NET Core package references to your project's .csproj or .fsproj files.
- [Visual Studio Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings) : Ports popular Visual Studio keyboard shortcuts to Visual Studio Code.
- [C# XML Documentation Comments](https://marketplace.visualstudio.com/items?itemName=k--kato.docomment) : Generate XML documentation comments for Visual Studio Code.
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) : Run a few lines of code in C# or Javascript inside a code file.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) : A basic spell checker that works well with camelCase code.

## C# Coding Standards

Coding conventions and standards to create consistent and readable code

### Naming Conventions

#### NameSpaces

- When naming namespaces Pascal case should be used
- Use client name as root of namespace, project as second level, technology or descriptor as third and/or fourth level.
  ```
  namespace AEP.MaterialOrderBuilder.Data.Extensions
  ```

#### Classes

- Use a noun or nounprharse in Pascal case
- Derived classes should be compound noun containing the name of the base class.

```
public class OperationsManager : Manager
{
}
```

- Pascal Casing for Class and Method names. Ex: `GetTaxCalculations`
- Camel Casing for variables and method parameters. Ex: `firstName`
- Prefix `I` with Pascal Casing for interface name. Ex: `IDisposable`
- Descriptive classs, method, and variable names. Ex: `Customer`, `GetCustomerFromDb`, `custFirstName`

### Layout Conventions

Layout
