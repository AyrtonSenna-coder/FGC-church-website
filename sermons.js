// Sermons Data
        const sermonsData = [
            {
                id: 1,
                title: "The Power of Persistent Prayer",
                speaker: "Pastor Michael Johnson",
                date: "May 28, 2023",
                tags: ["Faith", "Prayer"],
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Exploring Jesus' teachings on prayer and how consistent communication with God transforms our lives and circumstances.",
                isRecent: true,
                isPopular: true,
                series: "Foundations of Faith"
            },
            {
                id: 2,
                title: "Building Healthy Relationships",
                speaker: "Pastor Sarah Williams",
                date: "May 21, 2023",
                tags: ["Relationships", "Community"],
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
                excerpt: "Biblical principles for cultivating meaningful connections with family, friends, and our church community.",
                isRecent: true,
                isPopular: false,
                series: "Life Together"
            },
            {
                id: 3,
                title: "The Freedom of Forgiveness",
                speaker: "Pastor Michael Johnson",
                date: "May 14, 2023",
                tags: ["Forgiveness", "Grace"],
                image: "https://images.unsplash.com/photo-1580301762386-5b5d50dc6a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Understanding God's grace and learning to extend forgiveness to others as we've been forgiven by Christ.",
                isRecent: true,
                isPopular: true,
                series: "Foundations of Faith"
            },
            {
                id: 4,
                title: "The Heart of True Worship",
                speaker: "Pastor David Chen",
                date: "May 7, 2023",
                tags: ["Worship", "Spirituality"],
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Moving beyond rituals to discover what it means to worship God in spirit and in truth in our daily lives.",
                isRecent: true,
                isPopular: false,
                series: "Worship in Spirit and Truth"
            },
            {
                id: 5,
                title: "Serving With Purpose",
                speaker: "Pastor Sarah Williams",
                date: "Apr 30, 2023",
                tags: ["Service", "Purpose"],
                image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
                excerpt: "Discovering how God has uniquely gifted each of us to serve others and build up the body of Christ.",
                isRecent: false,
                isPopular: true,
                series: "Life Together"
            },
            {
                id: 6,
                title: "Walking By Faith, Not By Sight",
                speaker: "Pastor Michael Johnson",
                date: "Apr 23, 2023",
                tags: ["Faith", "Trust"],
                image: "https://images.unsplash.com/photo-1580301762386-5b5d50dc6a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Practical insights for trusting God's guidance when the path ahead seems uncertain or challenging.",
                isRecent: false,
                isPopular: true,
                series: "Foundations of Faith"
            },
            {
                id: 7,
                title: "The Good Samaritan: A Call to Compassion",
                speaker: "Pastor Sarah Williams",
                date: "Apr 16, 2023",
                tags: ["Compassion", "Service"],
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
                excerpt: "Revisiting Jesus' parable of the Good Samaritan and its implications for how we show compassion in our communities.",
                isRecent: false,
                isPopular: false,
                series: "The Parables of Jesus"
            },
            {
                id: 8,
                title: "The Prodigal Son: God's Unconditional Love",
                speaker: "Pastor Michael Johnson",
                date: "Apr 9, 2023",
                tags: ["Love", "Grace", "Forgiveness"],
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "Exploring the depth of God's unconditional love as illustrated in the parable of the prodigal son.",
                isRecent: false,
                isPopular: true,
                series: "The Parables of Jesus"
            },
            {
                id: 9,
                title: "Cultivating Love: The First Fruit",
                speaker: "Pastor Sarah Williams",
                date: "Apr 2, 2023",
                tags: ["Love", "Fruit of the Spirit"],
                image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
                excerpt: "Understanding agape love and how to cultivate this foundational fruit of the Spirit in our relationships.",
                isRecent: false,
                isPopular: false,
                series: "Fruit of the Spirit"
            },
            {
                id: 10,
                title: "The Joy of the Lord is Our Strength",
                speaker: "Pastor David Chen",
                date: "Mar 26, 2023",
                tags: ["Joy", "Strength"],
                image: "https://images.unsplash.com/photo-1580301762386-5b5d50dc6a95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                excerpt: "Discovering the source of true joy that sustains us through difficult circumstances and gives us strength.",
                isRecent: false,
                isPopular: false,
                series: "Fruit of the Spirit"
            },
            {
                id: 11,
                title: "Peace That Passes Understanding",
                speaker: "Pastor Michael Johnson",
                date: "Mar 19, 2023",
                tags: ["Peace", "Trust"],
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                excerpt: "How to experience God's supernatural peace even in the midst of life's storms and uncertainties.",
                isRecent: false,
                isPopular: true,
                series: "Fruit of the Spirit"
            },
            {
                id: 12,
                title: "Patience in a Fast-Paced World",
                speaker: "Pastor Sarah Williams",
                date: "Mar 12, 2023",
                tags: ["Patience", "Waiting"],
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
                excerpt: "Developing biblical patience as we learn to trust God's timing in our hurried and instant-gratification culture.",
                isRecent: false,
                isPopular: false,
                series: "Fruit of the Spirit"
            }
        ];

        // State variables
        let currentFilter = 'all';
        let currentPage = 1;
        const sermonsPerPage = 6;
        let filteredSermons = [...sermonsData];
        let searchTerm = '';

        // DOM Elements
        const sermonsContainer = document.getElementById('sermons-container');
        const paginationContainer = document.getElementById('pagination');
        const noResultsMessage = document.getElementById('no-results');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('search-input');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderSermons();
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
                    
                    // Filter and render sermons
                    filterSermons();
                    renderSermons();
                    setupPagination();
                });
            });
            
            // Search input
            searchInput.addEventListener('input', function() {
                searchTerm = this.value.toLowerCase();
                currentPage = 1;
                
                // Filter and render sermons
                filterSermons();
                renderSermons();
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

        // Filter sermons based on current filter and search term
        function filterSermons() {
            filteredSermons = sermonsData.filter(sermon => {
                // Apply search filter
                const matchesSearch = searchTerm === '' || 
                    sermon.title.toLowerCase().includes(searchTerm) ||
                    sermon.speaker.toLowerCase().includes(searchTerm) ||
                    sermon.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                    sermon.excerpt.toLowerCase().includes(searchTerm);
                
                if (!matchesSearch) return false;
                
                // Apply category filter
                switch(currentFilter) {
                    case 'recent':
                        return sermon.isRecent;
                    case 'popular':
                        return sermon.isPopular;
                    case 'series':
                        return sermon.series !== '';
                    case 'speaker':
                        // For demo purposes, show only Pastor Michael's sermons
                        return sermon.speaker === 'Pastor Michael Johnson';
                    default:
                        return true; // 'all' filter
                }
            });
        }

        // Render sermons for the current page
        function renderSermons() {
            sermonsContainer.innerHTML = '';
            
            // Calculate start and end indices for current page
            const startIndex = (currentPage - 1) * sermonsPerPage;
            const endIndex = startIndex + sermonsPerPage;
            const sermonsToShow = filteredSermons.slice(startIndex, endIndex);
            
            // Show no results message if no sermons match the criteria
            if (sermonsToShow.length === 0) {
                noResultsMessage.classList.add('active');
                return;
            } else {
                noResultsMessage.classList.remove('active');
            }
            
            // Create sermon cards
            sermonsToShow.forEach(sermon => {
                const sermonCard = document.createElement('div');
                sermonCard.className = 'sermon-card active';
                
                // Format date for display
                const displayDate = sermon.date.split(' ').slice(0, 2).join(' ');
                
                sermonCard.innerHTML = `
                    <div class="sermon-image">
                        <img src="${sermon.image}" alt="Sermon thumbnail">
                        <div class="sermon-date">${displayDate}</div>
                    </div>
                    <div class="sermon-content">
                        <div class="sermon-meta">
                            <span><i class="fas fa-user"></i> ${sermon.speaker}</span>
                            <span><i class="fas fa-tag"></i> ${sermon.tags.join(', ')}</span>
                        </div>
                        <h3>${sermon.title}</h3>
                        <p class="sermon-excerpt">${sermon.excerpt}</p>
                        <div class="sermon-actions">
                            <a href="#" class="action-btn"><i class="fas fa-play"></i> Watch</a>
                            <a href="#" class="action-btn"><i class="fas fa-headphones"></i> Listen</a>
                            <a href="#" class="action-btn"><i class="fas fa-file-alt"></i> Notes</a>
                        </div>
                    </div>
                `;
                
                sermonsContainer.appendChild(sermonCard);
            });
        }

        // Set up pagination
        function setupPagination() {
            paginationContainer.innerHTML = '';
            
            const totalPages = Math.ceil(filteredSermons.length / sermonsPerPage);
            
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
                    renderSermons();
                    setupPagination();
                    window.scrollTo({ top: sermonsContainer.offsetTop - 100, behavior: 'smooth' });
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
                    renderSermons();
                    setupPagination();
                    window.scrollTo({ top: sermonsContainer.offsetTop - 100, behavior: 'smooth' });
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
                    renderSermons();
                    setupPagination();
                    window.scrollTo({ top: sermonsContainer.offsetTop - 100, behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(nextButton);
        }