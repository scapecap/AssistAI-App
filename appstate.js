/**
 * TranslationDisplay.js
 * 
 * Creates and manages the language translation display area.
 * Simulates translation functionality for the MVP.
 */

export class TranslationDisplay {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isVisible = false;
        
        // Simulated translations for demo purposes
        this.simulatedTranslations = {
            "What is your name?": "¿Cómo te llamas?",
            "Where does it hurt?": "¿Dónde te duele?",
            "Are you allergic to any medications?": "¿Eres alérgico a algún medicamento?",
            "Can you breathe?": "¿Puedes respirar?",
            "Rate your pain from 1 to 10": "Califica tu dolor del 1 al 10",
            "When did this start?": "¿Cuándo empezó esto?",
            "Do you have any medical conditions?": "¿Tienes alguna condición médica?",
            "Are you taking any medications?": "¿Estás tomando algún medicamento?"
        };

        // Common languages for EMT scenarios
        this.languages = [
            { code: 'es', name: 'Spanish' },
            { code: 'zh', name: 'Chinese' },
            { code: 'fr', name: 'French' },
            { code: 'ar', name: 'Arabic' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'ru', name: 'Russian' }
        ];

        this.selectedLanguage = 'es';
    }

    /**
     * Shows the translation display
     */
    show() {
        this.isVisible = true;
        this.container.classList.remove('hidden');
        this.render();
    }

    /**
     * Hides the translation display
     */
    hide() {
        this.isVisible = false;
        this.container.classList.add('hidden');
    }

    /**
     * Renders the translation display
     */
    render() {
        const displayHTML = `
            <div class="max-w-4xl mx-auto space-y-4">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-semibold text-gray-800">Language Translation</h2>
                    <button id="close-translation-btn" 
                            class="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg class="h-6 w-