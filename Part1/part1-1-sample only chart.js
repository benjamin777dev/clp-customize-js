const container = document.getElementById('script-container');
if (!container) return;

container.parentNode.parentNode.style.overflowX = 'hidden';

// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem('userInfo')) || {};
const firstName = userData.firstName || 'Congrats!';
const currentWeight = parseFloat(userData.currentWeight) || 230;
const targetWeight = parseFloat(userData.targetWeight) || 195;
const weightToLose = currentWeight - targetWeight;

// Calculate intermediate points for a smooth curve
const intermediate1 = currentWeight - weightToLose * 0.35;
const intermediate2 = currentWeight - weightToLose * 0.65;
const intermediate3 = currentWeight - weightToLose * 0.85;

const currentDate = new Date();
const futureDate = new Date();
futureDate.setMonth(currentDate.getMonth() + 5);
const formattedDate = futureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

// Add Figtree font dynamically
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add Chart.js dynamically
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = () => {
  // Add DataLabels plugin dynamically
  const datalabelsScript = document.createElement('script');
  datalabelsScript.src = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels';
  datalabelsScript.onload = () => {
    // Inject HTML structure
    container.innerHTML = `
      <div style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: 'Figtree', sans-serif; color: #1A1F71;">
          <!-- Chart Section -->
          <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.4; text-align: center; color: #1A1F71;">
              <span style="display: inline-block; background: linear-gradient(90deg, #FFB400, #FF4500); background-clip: text; -webkit-background-clip: text; color: transparent;">${firstName}</span>
              We can help you lose up to 
              <span id="animatedWeight" style="display: inline-block; background: linear-gradient(90deg, #FF4500, #FFB400); background-clip: text; -webkit-background-clip: text; color: transparent;">0</span> pounds 
              by ${formattedDate}!
          </h1>
          <div style="position: relative; height: 300px; width: 100%; margin-bottom: 2rem; border: 1px solid #E6E8F0; border-radius: 10px;">
              <canvas id="weightChart"></canvas>
          </div>
      </div>
    `;

    // Chart data with dynamic styles
    const weightData = [
      { value: currentWeight, caption: '', color: '#FF5733', display:false, borderColor:'#FF5733'},
      { value: intermediate1, caption: 'Phase 1: Steady Loss', color: 'rgb(221, 65, 18)', fontSize: 16,borderColor:'#FFC300'},
      { value: intermediate2, caption: 'Phase 2: Major Progress', color: 'rgb(131, 121, 31)', fontSize: 17, borderColor:'rgb(176, 247, 166)'},
      { value: intermediate3, caption: 'Phase 3: Near Target', color: '#68B04A', fontSize: 18, borderColor:'#68B04A'},
      { value: targetWeight, caption: 'Goal Achieved!', color: 'white', fontSize: 20, bgColor: 'rgb(27, 153, 38)', borderColor:'rgb(27, 153, 38)'},
    ];

    // Extract values for the chart
    const chartValues = weightData.map(data => data.value);

    // Generate the chart
    const ctx = document.getElementById('weightChart').getContext('2d');

    // Create gradient for the border color
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    gradient.addColorStop(0, 'rgb(255, 61, 17)'); // Start color (red)
    gradient.addColorStop(0.5, 'rgba(255,87,51,1)'); // Start color (red)
    gradient.addColorStop(0.8, 'rgba(255,195,0,1)'); // Middle color (yellow)
    gradient.addColorStop(1, 'rgba(80, 186, 88, 1)'); // End color (blue)


    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1ST MONTH', '2ND MONTH', '3RD MONTH', '4TH MONTH', '5TH MONTH'],
        datasets: [
          {
            label: 'Weight',
            data: chartValues,
            borderColor: gradient,
            backgroundColor: 'rgba(26, 31, 113, 0.1)',
            borderWidth: 4,
            tension: 0.4,
            pointBackgroundColor: '#fff',
            pointBorderColor: context => {
                const index = context.dataIndex;
                return weightData[index].borderColor??'#fff';
            },
            pointBorderWidth: 4,
            pointRadius: weightData.map((_, index) => (index === weightData.length - 1 ? 12 : 8)),
          },
        ],
      },
      options: {
        layout: {
            padding: {
              top: 20,    // Padding from the top of the chart
              left: 20,   // Padding from the left of the chart
              right: 50,  // Padding from the right of the chart
              bottom: 20, // Padding from the bottom of the chart
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true, // Enable title
                text: 'Your Weight (LBS)', // Title text
                font: {
                  size: 15, // Font size
                  weight: 'bold', // Font weight
                  family: 'Arial', // Font family
                },
                color: '#1A1F71', // Title color
                padding: {
                  top: 10, // Padding above the title
                  bottom: 20, // Padding below the title
                },
                align: 'center', // Title alignment: 'start', 'center', or 'end'
              },
          legend: { display: false },
          datalabels: {
            align: 'top',
            anchor: 'end',
            offset: context => {
                const index = context.dataIndex;
                return index === weightData.length - 1 ? 20 : 0; // Add offset only for the last node
            },
            display: context => {
                const index = context.dataIndex;
                return weightData[index].display;
            },
            backgroundColor: context => {
              const index = context.dataIndex;
              return weightData[index].bgColor;
            },
            borderColor: context => {
                const index = context.dataIndex;
                return weightData[index].borderColor;
            },
            borderRadius: 999,
            color: context => {
              const index = context.dataIndex;
              return weightData[index].color;
            },
            font: context => {
              const index = context.dataIndex;
              return {
                size: weightData[index].fontSize,
                weight: 'bold',
              };
            },
            padding: {
                top: 20,
                bottom: 18,
                left:15,
                right: 15,
            },
            formatter: (value, context) => {
              const index = context.dataIndex;
              const nodeValue = weightData[index].value;
              return `${nodeValue}`; // Show value with caption
            },
          },
        },
        scales: {
          x: { ticks: { 
            display: true,
            color: 'rgba(26, 31, 113, 0.9)',
            font: {
                size: 11,
                weight: 'bold',
                family: 'Arial',
            },
        
        }, grid: { display: false }, },
          y: {
            ticks: { display: false },
            grid: { drawTicks: false, drawBorder: false, borderDash: [5, 5], color: '#E6E8F0' },
            min: targetWeight - 15,
            max: currentWeight + 15,
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    // Animate the weight-to-lose counter
    const animatedWeight = document.getElementById('animatedWeight');
    let currentWeightValue = 0;
    const animationSpeed = 10;
    const step = weightToLose / 100;

    function animateWeight() {
      if (currentWeightValue < weightToLose) {
        currentWeightValue = Math.min(currentWeightValue + step, weightToLose);
        animatedWeight.textContent = Math.floor(currentWeightValue);
        requestAnimationFrame(animateWeight);
      }
    }

    animateWeight();
  };

  document.head.appendChild(datalabelsScript);
};

document.head.appendChild(chartScript);
