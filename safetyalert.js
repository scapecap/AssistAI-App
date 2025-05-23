/**
 * SafetyAlert.js
 * 
 * Creates and manages safety alert displays.
 * Supports different alert types with appropriate visual styling.
 */

export class SafetyAlert {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentAlert = null;
        this.dismissTimeout = null;
    }

    /**
     * Shows a safety alert
     * @param {Object} alert - Alert configuration
     * @param {string} alert.message - Alert message
     * @param {string} alert.type - Alert type ('warning', 'critical', 'info')
     * @param {boolean} alert.autoDismiss - Whether to auto-dismiss after timeout
     * @param {number} alert.dismissTime - Time in ms before auto-dismiss (default: 5000)
     */
    show(alert) {
        this.currentAlert = {
            message: alert.message,
            type: alert.type || 'info',
            autoDismiss: alert.autoDismiss !== false,
            dismissTime: alert.dismissTime || 5000
        };

        this.render();
        this.container.classList.remove('hidden');

        // Set up auto-dismiss if enabled
        if (this.currentAlert.autoDismiss) {
            this.dismissTimeout = setTimeout(() => {
                this.dismiss();
            }, this.currentAlert.dismissTime);
        }

        // Animate in
        setTimeout(() => {
            const alertBox = this.container.querySelector('.alert-box');
            if (alertBox) {
                alertBox.classList.add('translate-y-0', 'opacity-100');
                alertBox.classList.remove('translate-y-2', 'opacity-0');
            }
        }, 10);
    }

    /**
     * Dismisses the current alert
     */
    dismiss() {
        if (this.dismissTimeout) {
            clearTimeout(this.dismissTimeout);
            this.dismissTimeout = null;
        }

        // Animate out
        const alertBox = this.container.querySelector('.alert-box');
        if (alertBox) {
            alertBox.classList.remove('translate-y-0', 'opacity-100');
            alertBox.classList.add('translate-y-2', 'opacity-0');
        }

        // Hide container after animation
        setTimeout(() => {
            this.container.classList.add('hidden');
            this.container.innerHTML = '';
            this.currentAlert = null;
        }, 300);
    }

    /**
     * Renders the alert content
     */
    render() {
        const alertStyles = {
            warning: {
                bg: 'bg-yellow-50',
                border: 'border-yellow-400',
                icon: 'text-yellow-600',
                text: 'text-yellow-800'
            },
            critical: {
                bg: 'bg-red-50',
                border: 'border-red-400',
                icon: 'text-red-600',
                text: 'text-red-800'
            },
            info: {
                bg: 'bg-blue-50',
                border: 'border-blue-400',
                icon: 'text-blue-600',
                text: 'text-blue-800'
            }
        };

        const styles = alertStyles[this.currentAlert.type] || alertStyles.info;

        const alertHTML = `
            <div class="alert-box transform transition-all duration-300 translate-y-2 opacity-0 
                        ${styles.bg} ${styles.border} border-l-4 p-4 rounded-r-lg shadow-lg">
                <div class="flex items-start">
                    <!-- Icon -->
                    <div class="flex-shrink-0">
                        ${this.getAlertIcon(this.currentAlert.type, styles.icon)}
                    </div>
                    
                    <!-- Content -->
                    <div class="ml-3 flex-1">
                        <p class="${styles.text} font-medium">
                            ${this.currentAlert.type === 'critical' ? 'CRITICAL: ' : ''}
                            ${this.currentAlert.message}
                        </p>
                    </div>
                    
                    <!-- Dismiss button -->
                    <button class="ml-3 ${styles.icon} hover:opacity-75 transition-opacity"
                            id="alert-dismiss-btn">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.container.innerHTML = alertHTML;
        this.attachEventListeners();
    }

    /**
     * Gets the appropriate icon for the alert type
     * @param {string} type - Alert type
     * @param {string} colorClass - Tailwind color class
     * @returns {string} SVG icon HTML
     */
    getAlertIcon(type, colorClass) {
        const icons = {
            warning: `
                <svg class="h-6 w-6 ${colorClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            `,
            critical: `
                <svg class="h-6 w-6 ${colorClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `,
            info: `
                <svg class="h-6 w-6 ${colorClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `
        };

        return icons[type] || icons.info;
    }

    /**
     * Attaches event listeners
     */
    attachEventListeners() {
        const dismissBtn = document.getElementById('alert-dismiss-btn');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', () => this.dismiss());
        }
    }

    /**
     * Shows a quick warning alert
     * @param {string} message - Warning message
     */
    showWarning(message) {
        this.show({
            message,
            type: 'warning',
            autoDismiss: true
        });
    }

    /**
     * Shows a critical alert
     * @param {string} message - Critical message
     */
    showCritical(message) {
        this.show({
            message,
            type: 'critical',
            autoDismiss: false // Critical alerts should be manually dismissed
        });
    }

    /**
     * Shows an info alert
     * @param {string} message - Info message
     */
    showInfo(message) {
        this.show({
            message,
            type: 'info',
            autoDismiss: true
        });
    }
}

// Export singleton instance
export default new SafetyAlert('safety-alert-container');