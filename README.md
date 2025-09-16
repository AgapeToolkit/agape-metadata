# @agape/metadata

Metadata annotations and descriptors for TypeScript classes, properties, methods, and parameters.

## ✨ Decorators

### `@Description(text)`
Attaches human-readable descriptions to classes, properties, methods, or parameters.

### `@Label(singular, plural?)`
Provides display labels for UI components and documentation.

### `@Name(name)`
Specifies custom names for serialization and identification.

### `@Sensitive(flag?)`
Marks elements as containing sensitive data (defaults to `true`).

### `@Token(singular, plural?)`
Associates tokens with elements for external system integration.

### `@Noun(singular, plural?)`
Defines grammatical nouns for natural language processing.

### `@Example(value)`
Provides example values for documentation and validation.

---

## 🚀 Example

```ts
import { Description, Label, Sensitive, Token, Noun, label, description, tokens } from '@agape/metadata';

@Label('User')
@Token('user')
@Noun('user', 'users')
@Description('User account with authentication and profile information')
class User {
  
  @Label('User ID')
  @Description('Unique identifier for the user')
  id!: number;
  
  @Label('Email Address')
  @Description('The user\'s email address for login and notifications')
  @Sensitive()
  email!: string;

  @Label('Full Name')
  @Description('The user\'s full name as displayed on their profile')
  fullName!: string;

  @Label('Created At')
  @Description('Account creation timestamp')
  createdAt!: Date;
}

// Use metadata in your application
const content = `
<h2>Edit ${label(User)}</h2>
<div>${description(User)}</div>
<form class="${tokens(User)}">
  <label for="fullName">${label(User, 'fullName')}</label>
  <input type="text" id="fullName" name="fullName" />
  
  <label for="email">${label(User, 'email')}</label>
  <input type="email" id="email" name="email" />
</form>
`;
```

---

## 🔧 Functions

### `description(target, property?, index?)`
Retrieves the description metadata for a class, property, or parameter.

### `name(target, property?, index?)`
Retrieves the name metadata for a class, property, or parameter.

### `label(target, property?, index?)`
Retrieves the label metadata for a class, property, or parameter.

### `sensitive(target, property?, index?)`
Checks if a class, property, or parameter is marked as sensitive.

### `token(target, property?, index?)`
Retrieves the token metadata for a class, property, or parameter.

### `noun(target, property?, index?)`
Retrieves the noun metadata for a class, property, or parameter.

### `example(target, property?, index?)`
Retrieves the example metadata for a class, property, or parameter.

### `labels(target, property?, index?)`
Retrieves the plural label for a class, property, or parameter.

### `tokens(target, property?, index?)`
Retrieves the plural token for a class, property, or parameter.

### `nouns(target, property?, index?)`
Retrieves the plural noun for a class, property, or parameter.

---

## 🏗️ MetadataDescriptor

### `MetadataDescriptor.for(target, property?, index?)`
Creates or retrieves a metadata descriptor for a class, property, or parameter.

### `MetadataDescriptor.get(target, property?, index?)`
Retrieves an existing metadata descriptor for a class, property, or parameter.

### Example
```ts
import { MetadataDescriptor } from '@agape/metadata';

// Get descriptor for a property
const descriptor = MetadataDescriptor.for(User, 'email');

// Access all metadata properties
console.log(descriptor.description);  // "The user's email address..."
console.log(descriptor.label);        // "Email Address"
console.log(descriptor.name);         // "email"
console.log(descriptor.sensitive);    // true
console.log(descriptor.token);        // "user.email"
console.log(descriptor.noun);         // "email"
console.log(descriptor.nouns);        // "emails"
console.log(descriptor.example);      // "john.doe@example.com"

// Set metadata directly
descriptor.description = "Updated description";
descriptor.sensitive = false;
```

---

## 📚 Documentation

See the full API documentation at [agape.dev/api](https://agape.dev/api).


## 📦 Agape Toolkit

This package is part of the [Agape Toolkit](https://github.com/AgapeToolkit/AgapeToolkit) - a comprehensive collection of TypeScript utilities and libraries for modern web development.
