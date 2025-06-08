let currentStep = 1;
        const totalSteps = 4;
        
        // Form navigation
        function showStep(step) {
            // Hide all sections
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show current section
            document.getElementById(`section${step}`).classList.add('active');
            
            // Update progress
            document.querySelectorAll('.progress-step').forEach((stepEl, index) => {
                if (index < step - 1) {
                    stepEl.classList.add('completed');
                    stepEl.classList.remove('active');
                } else if (index === step - 1) {
                    stepEl.classList.add('active');
                    stepEl.classList.remove('completed');
                } else {
                    stepEl.classList.remove('active', 'completed');
                }
            });
            
            // Update buttons
            const prevBtn = document.querySelector('.btn-prev');
            const nextBtn = document.querySelector('.btn-next');
            const submitBtn = document.querySelector('.btn-submit');
            
            if (step === 1) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'block';
            }
            
            if (step === totalSteps) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'block';
                generateSummary();
            } else {
                nextBtn.style.display = 'block';
                submitBtn.style.display = 'none';
            }
        }
        
        function nextStep() {
            if (validateCurrentStep()) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    showStep(currentStep);
                }
            }
        }
        
        function previousStep() {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        }
        
        function validateCurrentStep() {
            const currentSection = document.getElementById(`section${currentStep}`);
            const requiredFields = currentSection.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    field.classList.add('is-invalid');
                    isValid = false;
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (!isValid) {
                alert('لطفاً تمام فیلدهای الزامی را پر کنید.');
            }
            
            return isValid;
        }
        
        // Generate summary
        function generateSummary() {
            const formData = new FormData(document.getElementById('membershipForm'));
            const summaryContent = document.getElementById('summaryContent');
            
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const nationalId = formData.get('nationalId');
            const mobile = formData.get('mobile');
            const email = formData.get('email');
            const city = formData.get('city');
            
            const interests = [];
            const interestCheckboxes = document.querySelectorAll('input[name="interests"]:checked');
            interestCheckboxes.forEach(checkbox => {
                const label = checkbox.parentElement.querySelector('span').textContent;
                interests.push(label);
            });
            
            summaryContent.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <h5>اطلاعات شخصی</h5>
                        <p><strong>نام و نام خانوادگی:</strong> ${firstName} ${lastName}</p>
                        <p><strong>کد ملی:</strong> ${nationalId}</p>
                    </div>
                    <div class="col-md-6">
                        <h5>اطلاعات تماس</h5>
                        <p><strong>موبایل:</strong> ${mobile}</p>
                        <p><strong>ایمیل:</strong> ${email}</p>
                        <p><strong>شهر:</strong> ${city}</p>
                    </div>
                </div>
                <div class="mt-3">
                    <h5>زمینه‌های علاقه‌مندی</h5>
                    <ul>
                        ${interests.map(interest => `<li>${interest}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        // Form submission
        document.getElementById('membershipForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!document.getElementById('agreeTerms').checked) {
                alert('لطفاً با قوانین و مقررات موافقت کنید.');
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                document.querySelector('.form-container form').style.display = 'none';
                document.querySelector('.form-progress').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
            }, 1000);
        });
        
        // Add input validation feedback
        document.querySelectorAll('.form-control, .form-select').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                }
            });
        });
        
        // National ID validation
        document.querySelector('input[name="nationalId"]').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        
        // Mobile number validation
        document.querySelector('input[name="mobile"]').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        
        // Scroll animations
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
        });

        // Persian Date Picker
$(document).ready(function() {
    $("#birthdate").persianDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD',
        autoClose: true,
        toolbox: {
            calendarSwitch: {
                enabled: false
            }
        },
        navigator: {
            enabled: true,
            text: {
                btnNextText: "<",
                btnPrevText: ">"
            }
        },
        observer: true
    });
    
    // Remove readonly if exists
    $('#birthdate').prop('readonly', false);
    
    // Add calendar icon after input
    $('#birthdate').css({
        'cursor': 'pointer',
        'background-color': 'white'
    });
});