# Requirements: Babbby Support Page

## Summary

Create a support page at `alustudio.github.io/babbby` for the Babbby iOS app (a parenting companion for 0–6 yo activity recommendations). The page MUST include a Privacy Policy and Terms of Use, reachable at `/babbby/privacy` and `/babbby/terms` respectively. These URLs are hard-coded in the iOS app (`AppConfig.swift`). The page follows the same tech stack and structure as the existing Pikgeon support page, adapted for Babbby's brand, feature set, and legal context.

## User Stories

### Story 1: Privacy Policy Page

As an app user or App Store reviewer,
I want to read Babbby's Privacy Policy at a stable URL,
so that I understand how my data is handled.

#### Acceptance Criteria

##### Scenario: Visiting the Privacy Policy page

- GIVEN a user navigates to `alustudio.github.io/babbby/privacy`
- WHEN the page loads
- THEN a Privacy Policy is displayed with the app name "Babbby", publisher "Alu Studio", and contact email `alustudio14@gmail.com`
- AND the content covers: information collection, third-party services (Firebase Analytics, Firebase Crashlytics), data retention, children's privacy, user rights (GDPR/CCPA), security, and changes

##### Scenario: No advertising section

- GIVEN Babbby does not serve ads
- WHEN a user reads the Privacy Policy
- THEN there is no advertising or AdMob section
- AND there is no mention of advertising identifiers (IDFA/GAID)

##### Scenario: In-App Purchase data handling

- GIVEN Babbby offers a one-time sponsor IAP via StoreKit 2
- WHEN a user reads the Privacy Policy
- THEN it states that payment processing is handled entirely by Apple and the developer does not collect or store payment information

##### Scenario: Local data storage disclosure

- GIVEN all activity data is stored locally via GRDB
- WHEN a user reads the Privacy Policy
- THEN it clearly states that all user-created content (children profiles, activity logs, stats) is stored exclusively on-device and never transmitted to Alu Studio's servers

### Story 1b: Activity Disclaimer in Privacy Policy

As a parent using the app,
I want the Privacy Policy to clarify that activity data and recommendations are not professional advice,
so that I understand the app's limitations.

#### Acceptance Criteria

##### Scenario: Disclaimer about activity recommendations

- GIVEN a user reads the Privacy Policy
- WHEN they reach the data usage section
- THEN the policy states that activity recommendations are generated algorithmically for inspiration purposes only and do not constitute medical, educational, psychological, or child-development advice

### Story 2: Terms of Use Page

As an app user or App Store reviewer,
I want to read Babbby's Terms of Use at a stable URL,
so that I understand my rights and obligations.

#### Acceptance Criteria

##### Scenario: Visiting the Terms of Use page

- GIVEN a user navigates to `alustudio.github.io/babbby/terms`
- WHEN the page loads
- THEN Terms of Use are displayed with the app name "Babbby", publisher "Alu Studio", and contact email `alustudio14@gmail.com`
- AND the content covers: use license, restrictions, third-party services, device security, connectivity, updates, disclaimer, limitation of liability, and changes

##### Scenario: Activity disclaimer and parental responsibility

- GIVEN Babbby provides age-based activity suggestions
- WHEN a user reads the Terms of Use
- THEN the Terms clearly state that:
- AND (a) the app provides activity ideas for inspiration only, not professional advice on health, education, psychology, or child development
- AND (b) parents/guardians are solely responsible for supervising their children during any activity
- AND (c) age-based recommendations are general guidelines; every child develops differently, and parents must assess suitability
- AND (d) the app does not replace consultation with pediatricians, therapists, or other qualified professionals
- AND (e) the developer assumes no liability for any injury, harm, or outcome resulting from performing suggested activities

##### Scenario: Third-party services reference

- GIVEN Babbby uses Firebase Analytics and Firebase Crashlytics
- WHEN a user reads the Terms
- THEN those two services are listed with links to their respective terms pages
- AND AdMob is NOT listed

### Story 3: Bilingual Support (en / zh-Hant)

As a user whose device language is Chinese or English,
I want to see the legal pages in my preferred language,
so that I can understand the content without translation.

#### Acceptance Criteria

##### Scenario: Auto-detection of Chinese language

- GIVEN a user's browser language preference is zh or zh-Hant
- WHEN the page loads
- THEN the content is displayed in Traditional Chinese

##### Scenario: Fallback to Traditional Chinese

- GIVEN a user's browser language preference is not English or Chinese
- WHEN the page loads
- THEN the content defaults to Traditional Chinese (matching app default)

##### Scenario: Manual language switching

- GIVEN a user is viewing any page
- WHEN the user selects a different language from the language switcher
- THEN all page content switches to the selected language without a page reload

### Story 4: Minimal Landing Page

As a user who visits the base URL,
I want to see a simple landing page,
so that I know what app this site belongs to and can navigate to legal pages.

#### Acceptance Criteria

##### Scenario: Visiting the base URL

- GIVEN a user navigates to `alustudio.github.io/babbby/`
- WHEN the page loads
- THEN a landing page is displayed with the Babbby app name, a brief description, and navigation links to Privacy Policy and Terms of Use

### Story 5: GitHub Pages Deployment

As a developer,
I want the Babbby page to deploy automatically alongside the existing Pikgeon page,
so that both sites are maintained in a single repository.

#### Acceptance Criteria

##### Scenario: CI builds and deploys both sites

- GIVEN a commit is pushed to the `main` branch
- WHEN the GitHub Actions workflow runs
- THEN both Pikgeon and Babbby are built and deployed to their respective paths under GitHub Pages

##### Scenario: Independent sites

- GIVEN Pikgeon and Babbby are separate Vite projects
- WHEN either project is updated
- THEN the other project continues to work correctly without rebuild issues

## Non-Functional Requirements

| Category | Requirement | Strength |
|----------|-------------|----------|
| Compatibility | Pages MUST render correctly on iOS Safari, Chrome, and Firefox | MUST |
| Performance | Pages SHOULD load in under 2 seconds on 3G | SHOULD |
| Responsiveness | Pages MUST be mobile-friendly (responsive layout) | MUST |
| URL Stability | `/babbby/privacy` and `/babbby/terms` MUST remain stable (hard-coded in iOS app) | MUST |
| Branding | Pages SHOULD use Babbby's peach/coral color palette (#FFF8F2, #FF6B4A, #F17B54) | SHOULD |
| Accessibility | Pages SHOULD meet WCAG 2.1 AA contrast ratios | SHOULD |

## Open Questions

_None — scope is well-defined by existing Pikgeon pattern and Babbby app facts._
