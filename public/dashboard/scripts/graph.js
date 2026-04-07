//import { Chart } from "/node_modules/chart.js";

export default async function renderGraph() {

    // script.js

    // Wait until the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        const ctx = document.getElementById("bar_cnt");
        const loaderIc = document.getElementById("stats_g_load");

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Advance Excel', 'Linux', 'C++', 'MS Office', 'HTML/CSS', 'JS'],
                datasets: [
                    {
                        label: 'Total Files',
                        data: [65, 59, 80, 81, 56, 55],
                        backgroundColor: 'rgba(54, 162, 235, 0.85)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                        barThickness: 45
                    },
                    {
                        label: 'Total Views',
                        data: [23, 35, 73, 81, 96, 10],
                        backgroundColor: 'rgba(69, 235, 54, 0.85)',
                        borderColor: 'rgb(5, 192, 105)',
                        borderWidth: 2,
                        borderRadius: 8,
                        barThickness: 45
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                    y: {
                        beginAtZero: true,           // Important: bars start from 0
                        grid: { color: '#e0e0e0' }
                    },
                    x: {
                        grid: { display: false }
                    }
                },

                plugins: {
                    title: {
                        display: true,
                        text: 'Total Files & Views of Modules 2026',
                        font: { size: 18 }
                    },
                    legend: {
                        position: 'top'
                    }
                },

                // === BETTER ANIMATION CONFIGURATION ===
                animations: {
                    y: {
                        duration: 1800,           // how long the height animation takes
                        easing: 'easeOutQuart',  // bouncy & nice effect (or try 'easeOutQuart')
                        from: 0
                        

                    }
                },

            }
        });
        loaderIc.style.display = "none";
    });
}