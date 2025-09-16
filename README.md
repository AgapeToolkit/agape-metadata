# @agape/metadata

Metadata annotations and descriptors for TypeScript classes, properties, methods, and parameters.

## ✨ Decorators

### `@Description(text)`
Attaches human-readable descriptions to classes, properties, methods, or parameters.

### `@Name(name)`
Specifies custom names for serialization and identification.

### `@Label(text)`
Provides display labels for UI components and documentation.

### `@Sensitive(flag?)`
Marks elements as containing sensitive data (defaults to `true`).

### `@Token(name)`
Associates tokens with elements for external system integration.

### `@Noun(singular, plural?)`
Defines grammatical nouns for natural language processing.

### `@Example(value)`
Provides example values for documentation and validation.

---

## 🚀 Example

```ts
import { Description, Name, Label, Sensitive, Token, Noun } from '@agape/metadata';

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
```


### Metadata Retrieval

```ts
import { description, name, label, sensitive, token, noun } from '@agape/metadata';
import { tokens } from './tokens';

const content = `
<h2>Edit ${label(User)}</h2>
<div>
${description(User)}
<div>
<form class="${tokens(User)}">
  <label for="fullName">${label(User, 'fullName')}</label>
  <input type="text" id="fullName" name="fullName" />
  
  <label for="email">${label(User, 'email')}</label>
  <input type="email" id="email" name="email" />
</form>
`
```

---

## 🔧 Functions

### Metadata Retrieval
```ts
import { description, name, label, sensitive, token, noun } from '@agape/metadata';

// Get metadata from classes, properties, or parameters
const desc = description(User, 'email');
const name = name(User, 'email');
const isSensitive = sensitive(User, 'email');
```

### Metadata Descriptor
```ts
import { MetadataDescriptor } from '@agape/metadata';

// Access full metadata descriptor
const descriptor = MetadataDescriptor.for(User, 'email');
console.log(descriptor.description); // "The user's email address..."
console.log(descriptor.sensitive);   // true
```

---

## 📚 Documentation

See the full API documentation at [agape.dev/api](https://agape.dev/api).

---

## 📦 Repository

This package is part of the [AgapeToolkit monorepo](https://github.com/AgapeToolkit/AgapeToolkit).
