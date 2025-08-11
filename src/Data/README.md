# Data Directory

This directory contains all the static data used throughout the application, organized by feature/section.

## File Structure

### `services.js`
Contains the services data displayed in the Services section:
- Service icons, titles, and descriptions
- Used by `ServiceSection.jsx`

### `coreValues.js`
Contains the core values data displayed in the Core Values section:
- Value icons, titles, and descriptions
- Used by `CorevalueSection.jsx`

### `projects.js`
Contains the projects data displayed in the Projects section:
- Project images, titles, descriptions, and links
- Used by `projectSection.jsx`

### `partners.js`
Contains the partner logos data displayed in the Worked With section:
- Partner logo images and alt text
- Used by `WorkedWithSection.jsx`

### `whyChooseUs.js`
Contains the "Why Choose Us" data displayed in the About section:
- Item titles and descriptions
- Used by `AboutSection.jsx`

### `navigation.js`
Contains navigation and contact information:
- Navigation links
- Contact information (email, phone, address)
- Company information
- Used by `FooterSection.jsx`

### `index.js`
Main export file that exports all data for easier imports:
```javascript
import { services, coreValues, projects, partnerLogos, whyUsItems, navLinks, contactInfo, companyInfo } from '../Data'
```

## Usage

Instead of importing individual data files, you can import from the main index file:

```javascript
// Before (old way)
import { services } from '../Data/services'
import { coreValues } from '../Data/coreValues'

// After (new way)
import { services, coreValues } from '../Data'
```

## Benefits

1. **Separation of Concerns**: Data is separated from component logic
2. **Maintainability**: Easy to update content without touching component code
3. **Reusability**: Data can be reused across different components
4. **Organization**: Clear structure makes it easy to find and manage data
5. **Scalability**: Easy to add new data files as the application grows
