// Events data
const eventsData = {
    1: {
        title: 'کارگاه آموزش بازیافت خانگی',
        type: 'کارگاه آموزشی',
        typeId: 'workshop',
        date: '15 تیر 1404',
        time: '10:00 - 14:00',
        location: 'سالن اجتماعات سازمان - شیراز، بلوار مدرس',
        capacity: '50 نفر (35 نفر ثبت‌نام کرده)',
        description: 'در این کارگاه، شرکت‌کنندگان با روش‌های عملی و کاربردی بازیافت در منزل آشنا می‌شوند. موضوعات شامل تفکیک زباله، ساخت کمپوست خانگی، و راه‌های خلاقانه استفاده مجدد از مواد دورریختنی است.',
        requirements: 'حضور برای عموم آزاد است. ثبت‌نام از طریق سایت یا تماس تلفنی الزامی است. لطفاً دستکش و ماسک همراه داشته باشید.',
        isPast: false
    },
    2: {
        title: 'کمپین پاکسازی پارک‌های شهری',
        type: 'کمپین',
        typeId: 'campaign',
        date: '22 تیر 1404',
        time: '08:00 - 12:00',
        location: 'پارک آزادی شیراز - ورودی اصلی',
        capacity: 'ظرفیت نامحدود',
        description: 'پیوستن به بزرگترین حرکت مردمی پاکسازی پارک‌های شهر شیراز. این کمپین با هدف افزایش آگاهی عمومی و حفظ فضاهای سبز شهری برگزار می‌شود.',
        requirements: 'شرکت برای همه آزاد است. وسایل پاکسازی توسط سازمان تأمین می‌شود. صبحانه و میان‌وعده رایگان ارائه خواهد شد.',
        isPast: false
    },
    3: {
        title: 'همایش ملی حفاظت از جنگل‌ها',
        type: 'همایش',
        typeId: 'conference',
        date: '28 تیر 1404',
        time: '09:00 - 17:00',
        location: 'مرکز همایش‌های بین‌المللی شیراز',
        capacity: '200 نفر (180 نفر ثبت‌نام کرده)',
        description: 'همایش یک روزه با حضور متخصصان داخلی و خارجی در زمینه حفاظت از جنگل‌ها. سخنرانی‌ها، پنل‌های تخصصی و کارگاه‌های آموزشی از برنامه‌های این همایش است.',
        requirements: 'ثبت‌نام با ارائه کارت شناسایی معتبر. برای دانشجویان و اعضای سازمان تخفیف ویژه در نظر گرفته شده است.',
        isPast: false
    },
    4: {
        title: 'دوره آموزشی کشاورزی ارگانیک',
        type: 'دوره آموزشی',
        typeId: 'training',
        date: '5 مرداد 1404',
        time: '16:00 - 19:00',
        location: 'مرکز آموزش سازمان',
        capacity: '30 نفر (12 نفر ثبت‌نام کرده)',
        description: 'دوره 5 جلسه‌ای آموزش اصول کشاورزی ارگانیک و پایدار. مباحث شامل کاشت، داشت و برداشت محصولات سالم بدون استفاده از سموم شیمیایی است.',
        requirements: 'این دوره برای کشاورزان، دانشجویان کشاورزی و علاقه‌مندان برگزار می‌شود. گواهی پایان دوره ارائه خواهد شد.',
        isPast: false
    }
};

// Show events based on tab
function showEvents(type) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (type === 'future') {
        tabs[0].classList.add('active');
        document.getElementById('future-events').style.display = 'block';
        document.getElementById('past-events').style.display = 'none';
    } else {
        tabs[1].classList.add('active');
        document.getElementById('future-events').style.display = 'none';
        document.getElementById('past-events').style.display = 'block';
    }
    
    // Apply filters after changing tab
    filterEventsByType();
}

// Show event details
function showEventDetails(eventId) {
    const event = eventsData[eventId];
    
    document.getElementById('modalEventTitle').textContent = event.title;
    document.getElementById('modalEventType').textContent = event.type;
    document.getElementById('modalEventDate').textContent = event.date;
    document.getElementById('modalEventTime').textContent = event.time;
    document.getElementById('modalEventLocation').textContent = event.location;
    document.getElementById('modalEventCapacity').textContent = event.capacity;
    document.getElementById('modalEventDescription').textContent = event.description;
    document.getElementById('modalEventRequirements').textContent = event.requirements;
    
    const reserveBtn = document.getElementById('reserveBtn');
    if (event.isPast) {
        reserveBtn.textContent = 'این رویداد به پایان رسیده است';
        reserveBtn.disabled = true;
    } else {
        reserveBtn.textContent = 'رزرو رویداد';
        reserveBtn.disabled = false;
    }
    
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();
}

// Reserve event
function reserveEvent() {
    alert('رزرو شما با موفقیت ثبت شد. جزئیات از طریق ایمیل برای شما ارسال خواهد شد.');
    const modal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
    modal.hide();
}

// Filter events functionality
document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        filterEventsByType();
    });
});

// Function to filter events by type
function filterEventsByType() {
    const activeTab = document.querySelector('.tab-btn.active');
    const isFutureTab = activeTab && activeTab.textContent.includes('آینده');
    const container = isFutureTab ? document.getElementById('future-events') : document.getElementById('past-events');
    const eventCards = container.querySelectorAll('.event-card');
    
    const filters = {
        workshop: document.getElementById('workshop').checked,
        campaign: document.getElementById('campaign').checked,
        conference: document.getElementById('conference').checked,
        training: document.getElementById('training').checked
    };
    
    let hasVisibleCard = false;
    
    eventCards.forEach(card => {
        const eventType = getEventTypeFromCard(card);
        const shouldShow = filters[eventType];
        
        card.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) hasVisibleCard = true;
    });
    
    // Show/hide no results message
    updateNoResultsMessage(container, hasVisibleCard);
}

// Get event type from card
function getEventTypeFromCard(card) {
    const typeElement = card.querySelector('.event-type');
    if (!typeElement) return 'other';
    
    const typeText = typeElement.textContent.trim();
    
    if (typeText.includes('کارگاه')) return 'workshop';
    if (typeText.includes('کمپین')) return 'campaign';
    if (typeText.includes('همایش')) return 'conference';
    if (typeText.includes('دوره')) return 'training';
    
    return 'other';
}

// Show/hide no results message
function updateNoResultsMessage(container, hasVisibleCard) {
    let noResultsMsg = container.querySelector('.no-results-message');
    
    if (!hasVisibleCard) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-calendar-times fa-4x text-muted mb-3"></i>
                    <h4 class="text-muted">رویدادی با این فیلترها یافت نشد</h4>
                    <p class="text-muted">لطفاً فیلترهای دیگری را امتحان کنید</p>
                </div>
            `;
            container.appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// Scroll animations
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Add styles for no results message
const style = document.createElement('style');
style.textContent = `
    .no-results-message {
        padding: 60px 20px;
        text-align: center;
    }
    
    .no-results-message i {
        opacity: 0.3;
    }
    
    .event-card {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);