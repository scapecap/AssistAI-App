/**
 * GuidanceModal.js
 * 
 * Creates and manages a modal for displaying medical guidance and checklists.
 * Uses Tailwind CSS for styling and provides a clean interface for step-by-step protocols.
 */

export class GuidanceModal {
    constructor() {
        this.modalContainer = document.getElementById('modal-container');
        this.isOpen = false;
        this.currentContent = null;
    }

    /**
     * Opens the modal with specified content
     * @param {Object} content - Object containing title and items array
     * @param {string} content.title - Modal title
     * @param {Array} content.items - Array of guidance steps or checklist items
     * @param {string} content.type - Type of content ('guidance' or 'checklist')
     */
    open(content) {
        this.currentContent = content;
        this.isOpen = true;
        this.render();
        this.modalContainer.classList.remove('hidden');
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    /**
     * Closes the modal
     */
    close() {
        this.isOpen = false;
        this.modalContainer.classList.add('hidden');
        this.modalContainer.innerHTML = '';
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    /**
     * Renders the modal content
     */
    render() {
        const modalHTML = `
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" id="modal-backdrop"></div>
            
            <!-- Modal Content -->
            <div class="fixed inset-0 flex items-center justify-center p-4">
                <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col">
                    <!-- Header -->
                    <div class="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 class="text-xl font-semibold text-gray-900">${this.currentContent.title}</h2>
                        <button id="modal-close-btn" 
                                class="text-gray-400 hover:text-gray-600 transition-colors">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Scrollable Content Area -->
                    <div class="flex-1 overflow-y-auto p-4">
                        ${this.renderContent()}
                    </div>
                    
                    <!-- Footer -->
                    <div class="flex justify-end p-4 border-t border-gray-200">
                        <button id="modal-action-btn" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                            ${this.currentContent.type === 'checklist' ? 'Complete' : 'Got it'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.modalContainer.innerHTML = modalHTML;
        this.attachEventListeners();
    }

    /**
     * Renders the content based on type (guidance or checklist)
     * @returns {string} HTML string for content
     */
    renderContent() {
        if (!this.currentContent.items || this.currentContent.items.length === 0) {
            return '<p class="text-gray-500">No content available.</p>';
        }

        if (this.currentContent.type === 'checklist') {
            // Render as interactive checklist
            return `
                <div class="space-y-3">
                    ${this.currentContent.items.map((item, index) => `
                        <label class="flex items-start space-x-3 cursor-pointer group">
                            <input type="checkbox" 
                                   class="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                   data-index="${index}">
                            <span class="text-gray-700 group-hover:text-gray-900 flex-1">
                                ${item}
                            </span>
                        </label>
                    `).join('')}
                </div>
            `;
        } else {
            // Render as step-by-step guidance
            return `
                <ol class="space-y-4">
                    ${this.currentContent.items.map((item, index) => `
                        <li class="flex">
                            <span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full 
                                       flex items-center justify-center font-semibold mr-3">
                                ${index + 1}
                            </span>
                            <span class="text-gray-700 pt-1">
                                ${item}
                            </span>
                        </li>
                    `).join('')}
                </ol>
            `;
        }
    }

    /**
     * Attaches event listeners to modal elements
     */
    attachEventListeners() {
        // Close button
        const closeBtn = document.getElementById('modal-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Backdrop click
        const backdrop = document.getElementById('modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => this.close());
        }

        // Action button
        const actionBtn = document.getElementById('modal-action-btn');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => {
                // TODO: Future integration point for logging completed procedures
                console.log('Modal action completed:', this.currentContent.title);
                this.close();
            });
        }

        // Checkbox interactions for checklists
        if (this.currentContent.type === 'checklist') {
            const checkboxes = this.modalContainer.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    const index = e.target.dataset.index;
                    console.log(`Checklist item ${index} checked:`, e.target.checked);
                    // TODO: Future integration point for tracking checklist progress
                });
            });
        }
    }
}

// Export singleton instance
export default new GuidanceModal();