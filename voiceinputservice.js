/**
 * voiceInputService.js
 * 
 * Simulates voice input functionality for the AssistAI MVP.
 * In production, this would integrate with Web Speech API or similar.
 */

import appState from './appState.js';
import safetyAlert from '../components/SafetyAlert.js';

class VoiceInputService {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        
        // Simulated voice commands for demo
        this.simulatedCommands = [
            "show cardiac arrest protocol",
            "check vitals",
            "translate where does it hurt",
            "document patient information",
            "alert critical patient",
            "show medication dosage",
            "start CPR checklist"
        ];

        // Command patterns and their actions
        this.commandPatterns = [
            {
                pattern: /show|open|display/i,
                action: 'showProcedure'
            },
            {
                pattern: /translate/i,
                action: 'translate'
            },
            {
                pattern: /document|record/i,
                action: 'document'
            },
            {
                pattern: /alert|warning/i,
                action: 'alert'
            },
            {
                pattern: /check|vitals/i,
                action: 'checkVitals'
            },
            {
                pattern: /help|assist/i,
                action: 'help'
            }
        ];

        this.initializeSpeechRecognition();
    }

    /**
     * Initializes speech recognition (if available)
     */
    initializeSpeechRecognition() {
        // Check if Web Speech API is available
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            // Configure recognition
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';

            // Set up event handlers
            this.recognition.onstart = () => {
                console.log('Voice recognition started');
                this.updateVoiceStatus('Listening...');
            };

            this.recognition.onresult = (event) => {
                const transcript = Array.from(event.results)
                    .map(result => result[0].transcript)
                    .join('');
                
                if (event.results[0].isFinal) {
                    this.processVoiceCommand(transcript);
                } else {
                    this.updateVoiceStatus(`Hearing: "${transcript}"`);
                }
            };

            this.recognition.onerror = (event) => {
                console.error('Voice recognition error:', event.error);
                this.updateVoiceStatus('Error: ' + event.error);
                this.stopListening();
            };

            this.recognition.onend = () => {
                console.log('Voice recognition ended');
                this.stopListening();
            };
        } else {
            console.log('Web Speech API not available, using simulation mode');
        }
    }

    /**
     * Simulates voice input (for demo/testing)
     */
    simulateVoiceInput() {
        if (this.isListening) {
            this.stopListening();
            return;
        }

        this.isListening = true;
        appState.setVoiceActive(true);
        this.updateVoiceStatus('Listening (simulated)...');

        // Simulate processing delay
        setTimeout(() => {
            // Pick a random command
            const randomCommand = this.simulatedCommands[
                Math.floor(Math.random() * this.simulatedCommands.length)
            ];
            
            this.updateVoiceStatus(`Heard: "${randomCommand}"`);
            
            // Process after another short delay
            setTimeout(() => {
                this.processVoiceCommand(randomCommand);
                this.stopListening();
            }, 500);
        }, 1500);
    }

    /**
     * Starts real voice recognition
     */
    startListening() {
        if (this.isListening) return;

        if (this.recognition) {
            try {
                this.recognition.start();
                this.isListening = true;
                appState.setVoiceActive(true);
            } catch (e) {
                console.error('Failed to start recognition:', e);
                // Fall back to simulation
                this.simulateVoiceInput();
            }
        } else {
            // Use simulation if no recognition available
            this.simulateVoiceInput();
        }
    }

    /**
     * Stops voice recognition
     */
    stopListening() {
        this.isListening = false;
        appState.setVoiceActive(false);
        
        if (this.recognition) {
            try {
                this.recognition.stop();
            } catch (e) {
                // Already stopped
            }
        }
        
        // Clear status after a moment
        setTimeout(() => {
            this.updateVoiceStatus('');
        }, 2000);
    }

    /**
     * Processes voice command
     * @param {string} command - Voice command text
     */
    processVoiceCommand(command) {
        console.log('Processing command:', command);
        appState.setLastVoiceCommand(command);
        
        // Find matching pattern
        const match = this.commandPatterns.find(pattern => 
            pattern.pattern.test(command)
        );

        if (match) {
            this.executeAction(match.action, command);
        } else {
            this.updateVoiceStatus('Command not recognized');
            console.log('No matching pattern for command');
        }
    }

    /**
     * Executes action based on command
     * @param {string} action - Action type
     * @param {string} fullCommand - Full command text
     */
    executeAction(action, fullCommand) {
        switch (action) {
            case 'showProcedure':
                this.handleShowProcedure(fullCommand);
                break;
            
            case 'translate':
                this.handleTranslate(fullCommand);
                break;
            
            case 'document':
                this.handleDocument(fullCommand);
                break;
            
            case 'alert':
                this.handleAlert(fullCommand);
                break;
            
            case 'checkVitals':
                this.handleCheckVitals(fullCommand);
                break;
            
            case 'help':
                this.handleHelp(fullCommand);
                break;
            
            default:
                console.log('Unknown action:', action);
        }
    }

    /**
     * Handles show procedure command
     * @param {string} command - Command text
     */
    handleShowProcedure(command) {
        // Extract procedure name from command
        const procedures = ['cardiac arrest', 'cpr', 'medication', 'trauma', 'airway'];
        const found = procedures.find(proc => command.toLowerCase().includes(proc));
        
        if (found) {
            console.log('Opening procedure:', found);
            // In a real app, this would trigger opening the specific procedure
            // For now, we'll show an alert
            this.updateVoiceStatus(`Opening ${found} protocol`);
            
            // TODO: Trigger actual procedure modal
            // guidanceModal.open({ title: found, items: [...] });
        }
    }

    /**
     * Handles translate command
     * @param {string} command - Command text
     */
    handleTranslate(command) {
        console.log('Switching to translation mode');
        appState.setCurrentView('translation');
        
        // Extract text to translate if provided
        const translateMatch = command.match(/translate\s+(.+)/i);
        if (translateMatch && translateMatch[1]) {
            // TODO: Pass text to translation component
            console.log('Text to translate:', translateMatch[1]);
        }
        
        this.updateVoiceStatus('Translation mode activated');
    }

    /**
     * Handles document command
     * @param {string} command - Command text
     */
    handleDocument(command) {
        console.log('Switching to documentation mode');
        appState.setCurrentView('documentation');
        
        // Check for specific documentation type
        if (command.includes('patient')) {
            // TODO: Load patient info template
            console.log('Loading patient info template');
        } else if (command.includes('vitals')) {
            // TODO: Load vitals template
            console.log('Loading vitals template');
        }
        
        this.updateVoiceStatus('Documentation mode activated');
    }

    /**
     * Handles alert command
     * @param {string} command - Command text
     */
    handleAlert(command) {
        let alertType = 'warning';
        let message = 'Safety alert triggered by voice command';
        
        if (command.includes('critical') || command.includes('emergency')) {
            alertType = 'critical';
            message = 'CRITICAL: Emergency situation detected';
        }
        
        safetyAlert.show({
            message: message,
            type: alertType,
            autoDismiss: alertType !== 'critical'
        });
        
        this.updateVoiceStatus(`${alertType} alert shown`);
    }

    /**
     * Handles check vitals command
     * @param {string} command - Command text
     */
    handleCheckVitals(command) {
        console.log('Initiating vitals check');
        // In production, this would open vitals checklist or connect to monitoring devices
        
        // For demo, show a procedure
        this.updateVoiceStatus('Opening vitals checklist');
        
        // TODO: Open vitals checklist modal
        // guidanceModal.open({ title: 'Vitals Check', items: [...], type: 'checklist' });
    }

    /**
     * Handles help command
     * @param {string} command - Command text
     */
    handleHelp(command) {
        console.log('Showing help information');
        
        safetyAlert.show({
            message: 'Voice commands: "Show [procedure]", "Translate [text]", "Document [type]", "Alert [level]"',
            type: 'info',
            autoDismiss: true,
            dismissTime: 8000
        });
        
        this.updateVoiceStatus('Help information displayed');
    }

    /**
     * Updates voice status display
     * @param {string} status - Status message
     */
    updateVoiceStatus(status) {
        const statusText = document.getElementById('voice-status-text');
        const statusIndicator = document.getElementById('status-indicator');
        
        if (statusText) {
            statusText.textContent = status;
        }
        
        if (statusIndicator && status) {
            statusIndicator.textContent = status.split(':')[0];
        } else if (statusIndicator) {
            statusIndicator.textContent = 'Ready';
        }
    }

    /**
     * Toggles voice input
     */
    toggle() {
        if (this.isListening) {
            this.stopListening();
        } else {
            this.startListening();
        }
    }
}

// Export singleton instance
export default new VoiceInputService();