# AssistAI - Emergency Medical Assistant MVP

## Overview

AssistAI is a mobile-first web application designed to provide voice-activated AI assistance to EMTs and first responders in emergency medical situations. This MVP demonstrates the core functionality and user interface that will enhance the speed, accuracy, and safety of emergency care while reducing cognitive load and improving communication.

## Features

### Core Functionality
- **Real-time Medical Guidance**: Step-by-step protocols for emergency procedures
- **Procedural Checklists**: Interactive checklists for critical medical procedures
- **Language Translation** (Simulated): Quick translation for patient communication
- **Safety Alerts** (Simulated): Contextual warnings and critical notifications
- **Automated Documentation Prompts** (Simulated): Structured data entry for patient records
- **Voice Activation** (Simulated): Voice command interface for hands-free operation

### Key Capabilities
- Mobile-optimized responsive design
- Offline-capable architecture (ready for PWA conversion)
- Quick access to 10+ emergency protocols
- Multi-language support framework
- Real-time status indicators
- Keyboard shortcuts for efficiency

## Technology Stack

- **HTML5**: Semantic structure
- **Tailwind CSS**: Utility-first styling via CDN
- **Vanilla JavaScript (ES6+)**: Modern JavaScript with modules
- **No external dependencies**: Beyond Tailwind CSS CDN

## Project Structure

```
assistai-mvp/
├── public/
│   └── index.html              # Main entry point
├── src/
│   ├── components/
│   │   ├── GuidanceModal.js    # Modal for medical guidance/checklists
│   │   ├── ProcedureList.js    # Emergency procedures list
│   │   ├── SafetyAlert.js      # Safety alert system
│   │   ├── TranslationDisplay.js # Language translation interface
│   │   └── DocumentationPrompts.js # Documentation assistant
│   ├── services/
│   │   ├── appState.js         # Application state management
│   │   ├── voiceInputService.js # Voice input simulation
│   │   └── procedureData.js    # Medical procedure database
│   └── main.js                 # Application initialization
└── README.md                   # This file
```

## Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/assistai-mvp.git
   cd assistai-mvp
   ```

2. **Set up the file structure**
   - Create the directories as shown in the project structure above
   - Copy each code block into its respective file

3. **Serve the application**
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js:
     ```bash
     npx serve
     ```
   - Using VS Code Live Server extension

4. **Open in browser**
   - Navigate to `http://localhost:8000` (or your server's URL)
   - For best experience, use Chrome/Edge and enable mobile device emulation

## Usage

### Voice Commands (Simulated)
Click the microphone button or press `Ctrl+Space` to activate voice input. Supported commands include:
- "Show cardiac arrest protocol"
- "Check vitals"
- "Translate where does it hurt"
- "Document patient information"
- "Alert critical patient"

### Navigation
- Use the top navigation tabs to switch between Procedures, Translation, and Documentation
- Click on any procedure to view detailed step-by-step guidance
- Use keyboard shortcuts for faster navigation

### Keyboard Shortcuts
- `Ctrl/Cmd + Space`: Toggle voice input
- `Escape`: Close modals and alerts
- `Tab`: Navigate through interface elements

## Development

### Adding New Procedures
Edit `src/services/procedureData.js` to add new medical procedures:

```javascript
{
    id: 'procedure-id',
    name: 'Procedure Name',
    category: 'Category',
    description: 'Brief description',
    urgency: 'high|medium|low',
    estimatedTime: '10-15 min',
    type: 'guidance|checklist',
    steps: ['Step 1', 'Step 2', ...]
}
```

### Customizing Styling
The app uses Tailwind CSS classes. To customize:
1. Modify existing Tailwind classes in component files
2. Add custom CSS in `index.html` `<style>` section if needed

### Integrating Real APIs
The MVP includes placeholder comments for API integration:
- Voice recognition: Replace `simulateVoiceInput()` with Web Speech API
- Translation: Integrate with translation services (Google Translate, DeepL)
- Documentation: Connect to EHR/EMR systems
- Alerts: Integrate with hospital communication systems

## Future Enhancements

### Phase 2 Features
- [ ] Real voice recognition using Web Speech API
- [ ] Actual translation API integration
- [ ] GPS location services for nearest hospital routing
- [ ] Offline data persistence with Service Workers
- [ ] Push notifications for critical alerts
- [ ] Team communication features
- [ ] Medication dosage calculator
- [ ] Vital signs monitoring integration

### Phase 3 Features
- [ ] AI-powered diagnosis assistance
- [ ] Real-time video consultation
- [ ] Automated report generation
- [ ] Integration with hospital systems
- [ ] Advanced analytics dashboard
- [ ] Custom protocol builder
- [ ] Training mode for new EMTs

## Browser Support

- **Recommended**: Chrome 90+, Edge 90+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome for Android
- **Features**: Some features (like voice input) require modern browser support

## Security Considerations

For production deployment:
1. Implement HTTPS for all connections
2. Add authentication and authorization
3. Encrypt sensitive patient data
4. Implement HIPAA compliance measures
5. Add audit logging for all actions
6. Regular security assessments

## Contributing

This is an MVP demonstration. For contributing to the full project:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This MVP is for demonstration purposes. The production version will require appropriate medical software licensing and compliance with healthcare regulations.

## Support

For questions about this MVP:
- Technical issues: [Create an issue](https://github.com/yourusername/assistai-mvp/issues)
- Medical protocol questions: Consult your medical director
- Integration questions: Contact the development team

## Disclaimer

This is a demonstration MVP and should not be used for actual medical emergencies. Always follow your organization's protocols and medical director's guidance. The simulated features are for demonstration only and do not represent actual medical advice or guidance.

---

**Built with ❤️ for First Responders**