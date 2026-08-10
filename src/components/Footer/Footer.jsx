import React from 'react'
import logo from '../../assets/footer/logo.png'

function Footer() {

    return (

        // <!-- BEGIN: SiteFooter -->
        <footer class="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12 lg:px-24 w-full">
            <div class="max-w-7xl mx-auto">
                {/* <!-- Top Section: Links and Contact --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* <!-- Column 1: Quick Links --> */}
                    <div data-purpose="footer-column">
                        <h3 class="font-bold text-gray-900 mb-6 text-lg">Quick links</h3>
                        <ul class="space-y-4">
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Home</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">About</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Features</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Pricing</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Testimonials</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* <!-- Column 2: Job Categories --> */}
                    <div data-purpose="footer-column">
                        <h3 class="font-bold text-gray-900 mb-6 text-lg">Job categories</h3>
                        <ul class="space-y-4">
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Technology &amp; IT</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Marketing &amp; Sales</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Design &amp; Creative</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Real Estate</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Healthcare &amp; Science</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Business &amp; Finance</a></li>
                        </ul>
                    </div>
                    {/* <!-- Column 3: Support & Resources --> */}
                    <div data-purpose="footer-column">
                        <h3 class="font-bold text-gray-900 mb-6 text-lg">Support &amp; resources</h3>
                        <ul class="space-y-4">
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Help Center</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">How It Works</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Changelog</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">Terms &amp; Conditions</a></li>
                            <li><a class="text-gray-500 hover:text-brand transition-colors" href="#">404</a></li>
                        </ul>
                    </div>
                    {/* <!-- Column 4: Contact Us --> */}
                    <div class="flex flex-col items-center sm:items-start text-center sm:text-left" data-purpose="footer-column">
                        <h3 class="font-bold text-gray-900 mb-6 text-lg">Contact us</h3>
                        <ul class="space-y-4">
                            <li class="text-gray-500">Address: <span class="text-brand">123 Job Street, New York, NY 10001</span></li>
                            <li class="text-gray-500">Email: <a class="text-brand hover:underline" href="mailto:support@upwize.com">support@upwize.com</a></li>
                            <li class="text-gray-500">Phone: <a class="text-brand hover:underline" href="tel:+11234567890">+1 (123) 456-7890</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Middle Section: Large Logo --> */}
                <div class="mb-12 flex justify-center w-full overflow-hidden">
                    <img
                        alt="Upwize Logo Large"
                        class="w-full max-w-5xl object-contain h-auto opacity-90"
                        src={logo}
                    />
                </div>
                {/* <!-- Bottom Section: Sub-links and Copyright --> */}
                <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* <!-- Social and Legal Links --> */}
                    <ul class="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                        <li><a class="text-gray-600 font-medium hover:text-brand transition-colors" href="#">Twitter</a></li>
                        <li><a class="text-gray-600 font-medium hover:text-brand transition-colors" href="#">Linkedin</a></li>
                        <li><a class="text-gray-600 font-medium hover:text-brand transition-colors" href="#">Instagram</a></li>
                        <li><a class="text-gray-600 font-medium hover:text-brand transition-colors" href="#">Support</a></li>
                        <li class="md:ml-auto"><a class="text-gray-600 font-medium hover:text-brand transition-colors" href="#">Terms of use</a></li>
                    </ul>
                    {/* <!-- Copyright --> */}
                    <div class="text-gray-600 font-medium whitespace-nowrap">
                        upwize © 2025
                    </div>
                </div>
            </div>
        </footer>

    )

}

export default Footer