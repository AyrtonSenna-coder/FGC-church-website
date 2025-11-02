 // Ministries Data
        const ministriesData = [
            {
                id: 1,
                title: "Children's Ministry",
                category: "children",
                ageGroup: "Ages 3-12",
                schedule: "Sundays 9:00 AM & 11:00 AM",
                location: "Children's Wing",
                image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Engaging programs for children to learn about faith in a fun, safe environment with age-appropriate activities and biblical teachings.",
                leader: "Rebecca Martinez"
            },
            {
                id: 2,
                title: "Youth Group",
                category: "youth",
                ageGroup: "Ages 13-18",
                schedule: "Fridays 6:30 PM",
                location: "Youth Center",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80",
                excerpt: "A dynamic community for teens to explore faith, build friendships, and develop leadership skills through relevant teachings and activities.",
                leader: "Mark Thompson"
            },
            {
                id: 3,
                title: "Young Adults",
                category: "adults",
                ageGroup: "Ages 18-30",
                schedule: "Tuesdays 7:00 PM",
                location: "Fireside Room",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
                excerpt: "Building community and exploring faith together through Bible study, fellowship, and service opportunities for young adults.",
                leader: "David Chen"
            },
            {
                id: 4,
                title: "Men's Ministry",
                category: "adults",
                ageGroup: "All Adult Men",
                schedule: "Saturdays 8:00 AM",
                location: "Fellowship Hall",
                image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Encouraging men to grow in faith, build strong relationships, and serve together through study, prayer, and outreach.",
                leader: "Robert Johnson"
            },
            {
                id: 5,
                title: "Women's Ministry",
                category: "adults",
                ageGroup: "All Adult Women",
                schedule: "Thursdays 7:00 PM",
                location: "Chapel",
                image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                excerpt: "Creating spaces for women to connect, grow spiritually, and support one another through Bible studies, retreats, and service projects.",
                leader: "Sarah Williams"
            },
            {
                id: 6,
                title: "Senior Adults",
                category: "seniors",
                ageGroup: "Ages 65+",
                schedule: "Wednesdays 10:00 AM",
                location: "Senior Center",
                image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Fellowship, Bible study, and service opportunities designed specifically for our senior members.",
                leader: "Robert Johnson"
            },
            {
                id: 7,
                title: "Community Outreach",
                category: "outreach",
                ageGroup: "All Ages",
                schedule: "Various Times",
                location: "Community Locations",
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Serving our local community through food drives, shelter support, and partnership programs that demonstrate God's love in practical ways.",
                leader: "Jennifer Lee"
            },
            {
                id: 8,
                title: "Prayer Ministry",
                category: "adults",
                ageGroup: "All Ages",
                schedule: "Daily Prayer: 7:00 AM",
                location: "Prayer Room",
                image: "https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                excerpt: "Dedicated to covering our church, community, and world in prayer through intercession, prayer walks, and prayer chains.",
                leader: "Michael Johnson"
            },
            {
                id: 9,
                title: "Worship Ministry",
                category: "adults",
                ageGroup: "All Ages",
                schedule: "Rehearsals: Thursdays 7:00 PM",
                location: "Sanctuary",
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Leading our congregation in worship through music, arts, and creative expressions that honor God and draw people closer to Him.",
                leader: "David Chen"
            },
            {
                id: 10,
                title: "Marriage Ministry",
                category: "adults",
                ageGroup: "Married Couples",
                schedule: "Monthly Gatherings",
                location: "Various Locations",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Strengthening marriages through biblical principles, fellowship, and practical resources for couples at every stage.",
                leader: "Michael & Sarah Johnson"
            },
            {
                id: 11,
                title: "Single Parents Support",
                category: "adults",
                ageGroup: "Single Parents",
                schedule: "2nd Saturday Monthly",
                location: "Fireside Room",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
                excerpt: "Providing encouragement, practical help, and community for single parents navigating the challenges and joys of parenting alone.",
                leader: "Lisa Thompson"
            },
            {
                id: 12,
                title: "Mission Trips",
                category: "outreach",
                ageGroup: "All Ages",
                schedule: "Seasonal",
                location: "Various Locations",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                excerpt: "Short-term mission opportunities that allow our church family to serve communities locally, nationally, and internationally.",
                leader: "Jennifer Lee"
            }
        ];

        // State variables
        let currentFilter = 'all';
        let currentPage = 1;
        const ministriesPerPage = 6;
        let filteredMinistries = [...ministriesData];
        let searchTerm = '';

        // DOM Elements
        const ministriesContainer = document.getElementById('ministries-container');
        const paginationContainer = document.getElementById('pagination');
        const noResultsMessage = document.getElementById('no-results');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('search-input');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderMinistries();
            setupPagination();
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
                    
                    // Filter and render ministries
                    filterMinistries();
                    renderMinistries();
                    setupPagination();
                });
            });
            
            // Search input
            searchInput.addEventListener('input', function() {
                searchTerm = this.value.toLowerCase();
                currentPage = 1;
                
                // Filter and render ministries
                filterMinistries();
                renderMinistries();
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

        // Filter ministries based on current filter and search term
        function filterMinistries() {
            filteredMinistries = ministriesData.filter(ministry => {
                // Apply search filter
                const matchesSearch = searchTerm === '' || 
                    ministry.title.toLowerCase().includes(searchTerm) ||
                    ministry.leader.toLowerCase().includes(searchTerm) ||
                    ministry.excerpt.toLowerCase().includes(searchTerm) ||
                    ministry.ageGroup.toLowerCase().includes(searchTerm);
                
                if (!matchesSearch) return false;
                
                // Apply category filter
                if (currentFilter === 'all') return true;
                return ministry.category === currentFilter;
            });
        }

        // Render ministries for the current page
        function renderMinistries() {
            ministriesContainer.innerHTML = '';
            
            // Calculate start and end indices for current page
            const startIndex = (currentPage - 1) * ministriesPerPage;
            const endIndex = startIndex + ministriesPerPage;
            const ministriesToShow = filteredMinistries.slice(startIndex, endIndex);
            
            // Show no results message if no ministries match the criteria
            if (ministriesToShow.length === 0) {
                noResultsMessage.classList.add('active');
                return;
            } else {
                noResultsMessage.classList.remove('active');
            }
            
            // Create ministry cards
            ministriesToShow.forEach(ministry => {
                const ministryCard = document.createElement('div');
                ministryCard.className = 'ministry-card active';
                
                ministryCard.innerHTML = `
                    <div class="ministry-image">
                        <img src="${ministry.image}" alt="${ministry.title}">
                        <div class="ministry-age">${ministry.ageGroup}</div>
                    </div>
                    <div class="ministry-content">
                        <div class="ministry-meta">
                            <span><i class="far fa-clock"></i> ${ministry.schedule}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${ministry.location}</span>
                        </div>
                        <h3>${ministry.title}</h3>
                        <p class="ministry-excerpt">${ministry.excerpt}</p>
                        <div class="ministry-meta">
                            <span><i class="fas fa-user"></i> Leader: ${ministry.leader}</span>
                        </div>
                        <div class="ministry-actions">
                            <a href="#" class="action-btn"><i class="fas fa-info-circle"></i> Learn More</a>
                            <a href="#" class="action-btn"><i class="fas fa-calendar-alt"></i> Schedule</a>
                            <a href="#" class="action-btn"><i class="fas fa-user-plus"></i> Join</a>
                        </div>
                    </div>
                `;
                
                ministriesContainer.appendChild(ministryCard);
            });
        }

        // Set up pagination
        function setupPagination() {
            paginationContainer.innerHTML = '';
            
            const totalPages = Math.ceil(filteredMinistries.length / ministriesPerPage);
            
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
                    renderMinistries();
                    setupPagination();
                    window.scrollTo({ top: ministriesContainer.offsetTop - 100, behavior: 'smooth' });
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
                    renderMinistries();
                    setupPagination();
                    window.scrollTo({ top: ministriesContainer.offsetTop - 100, behavior: 'smooth' });
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
                    renderMinistries();
                    setupPagination();
                    window.scrollTo({ top: ministriesContainer.offsetTop - 100, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(nextButton);
        }