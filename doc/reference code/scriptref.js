// ==================== Event Data ====================
const featuredEvents = [
    {
        id: "1",
        title: "Summer Music Festival 2025",
        image: "https://images.unsplash.com/photo-1700087209989-5a83d1a7c484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjE2NTE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-06-15",
        dateDisplay: "June 15, 2025",
        time: "6:00 PM",
        location: "Central Park, New York, NY",
        price: "$45 - $120",
        category: "Music",
        isFeatured: true
    },
    {
        id: "2",
        title: "Food & Wine Festival",
        image: "https://images.unsplash.com/photo-1551883709-2516220df0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc2MTU2NjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-05-20",
        dateDisplay: "May 20, 2025",
        time: "12:00 PM",
        location: "Downtown Plaza, Chicago, IL",
        price: "$30 - $85",
        category: "Food & Drink",
        isFeatured: true
    },
    {
        id: "3",
        title: "Tech Innovation Summit",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxNTY0NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-07-08",
        dateDisplay: "July 8, 2025",
        time: "9:00 AM",
        location: "Convention Center, San Francisco, CA",
        price: "$299 - $599",
        category: "Business",
        isFeatured: false
    },
    {
        id: "4",
        title: "Modern Art Exhibition",
        image: "https://images.unsplash.com/photo-1719398026703-0d3f3d162e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NjE2NDM5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-05-01",
        dateDisplay: "May 1, 2025",
        time: "10:00 AM",
        location: "City Art Gallery, Los Angeles, CA",
        price: "Free",
        category: "Arts",
        isFeatured: false
    }
];

const upcomingEvents = [
    {
        id: "5",
        title: "Championship Finals",
        image: "https://images.unsplash.com/photo-1760508737418-a7add7ee3871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwZXZlbnR8ZW58MXx8fHwxNzYxNTc5NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-06-25",
        dateDisplay: "June 25, 2025",
        time: "7:00 PM",
        location: "Stadium Arena, Boston, MA",
        price: "$75 - $250",
        category: "Sports",
        isFeatured: false
    },
    {
        id: "6",
        title: "Broadway Musical Night",
        image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NjE1ODA4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-05-18",
        dateDisplay: "May 18, 2025",
        time: "8:00 PM",
        location: "Grand Theater, New York, NY",
        price: "$89 - $195",
        category: "Theater",
        isFeatured: false
    },
    {
        id: "7",
        title: "Jazz & Blues Night",
        image: "https://images.unsplash.com/photo-1700087209989-5a83d1a7c484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjE2NTE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-05-28",
        dateDisplay: "May 28, 2025",
        time: "7:30 PM",
        location: "Blue Note Club, New Orleans, LA",
        price: "$35 - $75",
        category: "Music",
        isFeatured: false
    },
    {
        id: "8",
        title: "Startup Pitch Competition",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzYxNTY0NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "2025-06-10",
        dateDisplay: "June 10, 2025",
        time: "2:00 PM",
        location: "Tech Hub, Austin, TX",
        price: "$25 - $50",
        category: "Business",
        isFeatured: false
    }
];

// ==================== Helper Functions ====================

/**
 * Creates an event card HTML element
 * @param {Object} event - Event data object
 * @returns {string} HTML string for event card
 */
function createEventCard(event) {
    const featuredBadge = event.isFeatured 
        ? `<span class="event-featured-badge" aria-label="Featured event">Featured</span>` 
        : '';
    
    return `
        <div class="event-card" role="listitem">
            <article role="article" aria-labelledby="event-title-${event.id}">
                <div class="event-image-wrapper">
                    <img 
                        src="${event.image}" 
                        alt="${event.title} event image" 
                        class="event-image"
                        loading="lazy"
                    />
                    <button 
                        class="event-like-btn" 
                        data-event-id="${event.id}"
                        aria-label="Add ${event.title} to favorites"
                        aria-pressed="false"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                    </button>
                    ${featuredBadge}
                </div>
                <div class="event-content">
                    <div>
                        <span class="event-category" aria-label="Category: ${event.category}">
                            ${event.category}
                        </span>
                    </div>
                    <h3 id="event-title-${event.id}" class="event-title">
                        <a href="#event/${event.id}">${event.title}</a>
                    </h3>
                    <div class="event-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        <time datetime="${event.date}">
                            ${event.dateDisplay} • ${event.time}
                        </time>
                    </div>
                    <div class="event-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <address>${event.location}</address>
                    </div>
                    <div class="event-footer">
                        <span class="event-price" aria-label="Price: ${event.price}">
                            ${event.price}
                        </span>
                        <button class="btn btn-primary event-details-btn" aria-label="View details for ${event.title}">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" x2="21" y1="14" y2="3"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    `;
}

/**
 * Renders events to a container
 * @param {string} containerId - ID of the container element
 * @param {Array} events - Array of event objects
 */
function renderEvents(containerId, events) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = events.map(event => createEventCard(event)).join('');
}

/**
 * Handles like button click
 * @param {Event} e - Click event
 */
function handleLikeClick(e) {
    const button = e.currentTarget;
    const eventId = button.dataset.eventId;
    const isLiked = button.getAttribute('aria-pressed') === 'true';
    
    // Toggle liked state
    button.setAttribute('aria-pressed', !isLiked);
    button.classList.toggle('liked');
    
    // Update aria-label
    const eventTitle = document.getElementById(`event-title-${eventId}`).textContent.trim();
    const newLabel = !isLiked 
        ? `Remove ${eventTitle} from favorites` 
        : `Add ${eventTitle} to favorites`;
    button.setAttribute('aria-label', newLabel);
    
    // Toggle fill on the heart icon
    const svg = button.querySelector('svg path');
    if (svg) {
        svg.setAttribute('fill', !isLiked ? 'currentColor' : 'none');
    }
}

/**
 * Attaches event listeners to like buttons
 */
function attachLikeButtonListeners() {
    const likeButtons = document.querySelectorAll('.event-like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLikeClick);
    });
}

// ==================== Mobile Menu ====================

/**
 * Toggles mobile menu visibility
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-toggle');
    
    if (!mobileMenu || !menuButton) return;
    
    const isHidden = mobileMenu.hasAttribute('hidden');
    
    if (isHidden) {
        mobileMenu.removeAttribute('hidden');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Close menu');
    } else {
        mobileMenu.setAttribute('hidden', '');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
    }
}

// ==================== Search Form ====================

/**
 * Handles search form submission
 * @param {Event} e - Submit event
 */
function handleSearchSubmit(e) {
    e.preventDefault();
    
    const searchInput = document.getElementById('event-search');
    const locationInput = document.getElementById('location-search');
    
    const searchQuery = searchInput.value.trim();
    const location = locationInput.value.trim();
    
    if (searchQuery || location) {
        console.log('Searching for:', searchQuery, 'in', location);
        // In a real application, this would trigger a search/filter operation
        alert(`Searching for "${searchQuery}" in "${location}"`);
    }
}

// ==================== Keyboard Navigation ====================

/**
 * Enhances keyboard navigation for better accessibility
 */
function setupKeyboardNavigation() {
    // Allow Escape key to close mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('mobile-menu-toggle');
            
            if (mobileMenu && !mobileMenu.hasAttribute('hidden')) {
                mobileMenu.setAttribute('hidden', '');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open menu');
                menuButton.focus(); // Return focus to menu button
            }
        }
    });
}

// ==================== Initialization ====================

/**
 * Initialize the application
 */
function init() {
    // Render events
    renderEvents('featured-events', featuredEvents);
    renderEvents('upcoming-events', upcomingEvents);
    
    // Attach event listeners
    attachLikeButtonListeners();
    
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-toggle');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchSubmit);
    }
    
    // Keyboard navigation
    setupKeyboardNavigation();
    
    // Announce page load to screen readers
    console.log('EventFinder application loaded successfully');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==================== Additional Accessibility Features ====================

/**
 * Announces dynamic content changes to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Export functions for potential use in other scripts
window.EventFinder = {
    renderEvents,
    announceToScreenReader,
    featuredEvents,
    upcomingEvents
};
