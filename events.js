    // Events Data
        const eventsData = [
            {
                id: 1,
                title: "Summer Picnic & Fellowship",
                category: "fellowship",
                date: "2023-06-15",
                time: "11:00 AM - 3:00 PM",
                location: "Community Park",
                image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                excerpt: "Join us for food, games, and fellowship at our annual summer picnic. All are welcome!",
                isFeatured: true,
                isUpcoming: true
            },
            {
                id: 2,
                title: "Baptism Service",
                category: "worship",
                date: "2023-06-22",
                time: "2:00 PM",
                location: "Church Sanctuary",
                image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Celebrate with those taking the next step in their faith journey through baptism.",
                isFeatured: true,
                isUpcoming: true
            },
            {
                id: 3,
                title: "Mission Trip Informational",
                category: "service",
                date: "2023-06-30",
                time: "6:30 PM",
                location: "Fellowship Hall",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                excerpt: "Learn about our upcoming mission trip opportunities and how you can get involved.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 4,
                title: "Youth Summer Camp",
                category: "fellowship",
                date: "2023-07-10",
                time: "All Day",
                location: "Lakeview Campground",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "A week of fun, fellowship, and spiritual growth for our youth group. Registration required.",
                isFeatured: true,
                isUpcoming: true
            },
            {
                id: 5,
                title: "Financial Peace University",
                category: "education",
                date: "2023-07-15",
                time: "9:00 AM",
                location: "Classroom B",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
                excerpt: "Learn biblical principles for managing money and achieving financial freedom.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 6,
                title: "Community Food Drive",
                category: "service",
                date: "2023-07-22",
                time: "10:00 AM - 2:00 PM",
                location: "Church Parking Lot",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Help us collect non-perishable food items for local families in need.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 7,
                title: "Marriage Enrichment Retreat",
                category: "fellowship",
                date: "2023-08-05",
                time: "Friday - Sunday",
                location: "Mountain Retreat Center",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "A weekend away to strengthen your marriage through biblical principles and fellowship.",
                isFeatured: true,
                isUpcoming: true
            },
            {
                id: 8,
                title: "Back to School Blessing",
                category: "worship",
                date: "2023-08-13",
                time: "During Services",
                location: "Sanctuary",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
                excerpt: "Special blessing for students, teachers, and administrators as the new school year begins.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 9,
                title: "Men's Breakfast",
                category: "fellowship",
                date: "2023-08-19",
                time: "8:00 AM",
                location: "Fellowship Hall",
                image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                excerpt: "Monthly gathering for men to connect over breakfast and spiritual encouragement.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 10,
                title: "Women's Retreat",
                category: "fellowship",
                date: "2023-09-08",
                time: "Friday - Sunday",
                location: "Lakeside Retreat Center",
                image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                excerpt: "A weekend of spiritual renewal, fellowship, and relaxation for women of all ages.",
                isFeatured: true,
                isUpcoming: true
            },
            {
                id: 11,
                title: "Fall Festival",
                category: "fellowship",
                date: "2023-10-21",
                time: "4:00 PM - 7:00 PM",
                location: "Church Grounds",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Family-friendly festival with games, food, and activities for all ages.",
                isFeatured: false,
                isUpcoming: true
            },
            {
                id: 12,
                title: "Thanksgiving Community Dinner",
                category: "service",
                date: "2023-11-23",
                time: "1:00 PM - 4:00 PM",
                location: "Fellowship Hall",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Free Thanksgiving dinner for our church family and community. Volunteers needed!",
                isFeatured: true,
                isUpcoming: true
            }
        ];

        // State variables
        let currentFilter = 'all';
        let currentView = 'grid';
        let currentPage = 1;
        const eventsPerPage = 6;
        let filteredEvents = [...eventsData];
        let searchTerm = '';
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        // DOM Elements
        const eventsContainer = document.getElementById('events-container');
        const calendarContainer = document.getElementById('calendar-container');
        const paginationContainer = document.getElementById('pagination');
        const noResultsMessage = document.getElementById('no-results');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const viewButtons = document.querySelectorAll('.view-btn');
        const categoryCards = document.querySelectorAll('.category-card');
        const searchInput = document.getElementById('search-input');
        const eventsGridSection = document.getElementById('events-grid');
        const calendarViewSection = document.getElementById('calendar-view');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderEvents();
            setupPagination();
            generateCalendar();
            setupEventListeners();
        });

        // Set up event listeners
        function setupEventListeners() {
            // Filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Update current filter
                    currentFilter = this.getAttribute('data-filter');
                    currentPage = 1;
                    
                    // Filter and render events
                    filterEvents();
                    renderEvents();
                    setupPagination();
                });
            });
            
            // View toggle buttons
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    viewButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Update current view
                    currentView = this.getAttribute('data-view');
                    
                    // Show/hide appropriate view
                    if (currentView === 'grid') {
                        eventsGridSection.style.display = 'block';
                        calendarViewSection.style.display = 'none';
                    } else {
                        eventsGridSection.style.display = 'none';
                        calendarViewSection.style.display = 'block';
                        generateCalendar();
                    }
                });
            });
            
            // Category cards
            categoryCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Remove active class from all cards
                    categoryCards.forEach(c => c.classList.remove('active'));
                    // Add active class to clicked card
                    this.classList.add('active');
                    
                    // Update current filter
                    currentFilter = this.getAttribute('data-category');
                    currentPage = 1;
                    
                    // Filter and render events
                    filterEvents();
                    renderEvents();
                    setupPagination();
                });
            });
            
            // Search input
            searchInput.addEventListener('input', function() {
                searchTerm = this.value.toLowerCase();
                currentPage = 1;
                
                // Filter and render events
                filterEvents();
                renderEvents();
                setupPagination();
            });
            
            // Mobile menu toggle
            document.querySelector('.mobile-menu').addEventListener('click', function() {
                document.querySelector('nav').classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', function() {
                    document.querySelector('nav').classList.remove('active');
                });
            });
        }

        // Filter events based on current filter and search term
        function filterEvents() {
            filteredEvents = eventsData.filter(event => {
                // Apply search filter
                const matchesSearch = searchTerm === '' || 
                    event.title.toLowerCase().includes(searchTerm) ||
                    event.location.toLowerCase().includes(searchTerm) ||
                    event.excerpt.toLowerCase().includes(searchTerm);
                
                if (!matchesSearch) return false;
                
                // Apply category filter
                switch(currentFilter) {
                    case 'upcoming':
                        return event.isUpcoming;
                    case 'featured':
                        return event.isFeatured;
                    case 'worship':
                    case 'fellowship':
                    case 'service':
                    case 'education':
                        return event.category === currentFilter;
                    default:
                        return true; // 'all' filter
                }
            });
        }

        // Render events for the current page
        function renderEvents() {
            eventsContainer.innerHTML = '';
            
            // Calculate start and end indices for current page
            const startIndex = (currentPage - 1) * eventsPerPage;
            const endIndex = startIndex + eventsPerPage;
            const eventsToShow = filteredEvents.slice(startIndex, endIndex);
            
            // Show no results message if no events match the criteria
            if (eventsToShow.length === 0) {
                noResultsMessage.classList.add('active');
                return;
            } else {
                noResultsMessage.classList.remove('active');
            }
            
            // Create event cards
            eventsToShow.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card active';
                
                // Format date for display
                const eventDate = new Date(event.date);
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const displayMonth = monthNames[eventDate.getMonth()];
                const displayDay = eventDate.getDate();
                
                eventCard.innerHTML = `
                    <div class="event-image">
                        <img src="${event.image}" alt="${event.title}">
                        <div class="event-date">
                            <span class="day">${displayDay}</span>
                            <span class="month">${displayMonth}</span>
                        </div>
                    </div>
                    <div class="event-content">
                        <div class="event-meta">
                            <span><i class="far fa-clock"></i> ${event.time}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                        </div>
                        <h3>${event.title}</h3>
                        <p class="event-excerpt">${event.excerpt}</p>
                        <div class="event-actions">
                            <a href="#" class="action-btn"><i class="fas fa-info-circle"></i> Details</a>
                            <a href="#" class="action-btn"><i class="far fa-calendar-plus"></i> Add to Calendar</a>
                            <a href="#" class="action-btn"><i class="fas fa-user-plus"></i> RSVP</a>
                        </div>
                    </div>
                `;
                
                eventsContainer.appendChild(eventCard);
            });
        }

        // Generate calendar view
        function generateCalendar() {
            calendarContainer.innerHTML = '';
            
            // Create calendar header
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            const calendarHeader = document.createElement('div');
            calendarHeader.className = 'calendar-header';
            calendarHeader.innerHTML = `
                <button class="calendar-nav-btn" id="prev-month"><i class="fas fa-chevron-left"></i></button>
                <h3>${monthNames[currentMonth]} ${currentYear}</h3>
                <button class="calendar-nav-btn" id="next-month"><i class="fas fa-chevron-right"></i></button>
            `;
            calendarContainer.appendChild(calendarHeader);
            
            // Create calendar grid
            const calendarGrid = document.createElement('div');
            calendarGrid.className = 'calendar-grid';
            
            // Add day headers
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day-header';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });
            
            // Get first day of month and number of days
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            
            // Add empty cells for days before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.className = 'calendar-day empty';
                calendarGrid.appendChild(emptyDay);
            }
            
            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                
                const dayNumber = document.createElement('div');
                dayNumber.className = 'day-number';
                dayNumber.textContent = day;
                dayElement.appendChild(dayNumber);
                
                // Add events for this day
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayEvents = eventsData.filter(event => event.date === dateStr);
                
                dayEvents.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = 'calendar-event';
                    eventElement.textContent = event.title;
                    eventElement.title = `${event.title} - ${event.time}`;
                    dayElement.appendChild(eventElement);
                });
                
                calendarGrid.appendChild(dayElement);
            }
            
            calendarContainer.appendChild(calendarGrid);
            
            // Add event listeners for calendar navigation
            document.getElementById('prev-month').addEventListener('click', function() {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                generateCalendar();
            });
            
            document.getElementById('next-month').addEventListener('click', function() {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                generateCalendar();
            });
        }

        // Set up pagination
        function setupPagination() {
            paginationContainer.innerHTML = '';
            
            const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
            
            // Don't show pagination if there's only one page
            if (totalPages <= 1) return;
            
            // Previous button
            const prevButton = document.createElement('button');
            prevButton.className = 'page-btn';
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderEvents();
                    setupPagination();
                    window.scrollTo({ top: eventsContainer.offsetTop - 100, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(prevButton);
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    renderEvents();
                    setupPagination();
                    window.scrollTo({ top: eventsContainer.offsetTop - 100, behavior: 'smooth' });
                });
                paginationContainer.appendChild(pageButton);
            }
            
            // Next button
            const nextButton = document.createElement('button');
            nextButton.className = 'page-btn';
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderEvents();
                    setupPagination();
                    window.scrollTo({ top: eventsContainer.offsetTop - 100, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(nextButton);
        }