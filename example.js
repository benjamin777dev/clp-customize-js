const container = document.getElementById('script-container');
if (!container) return;

container.innerHTML = `
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: 'Arial', sans-serif; color: #2C3E50; line-height: 1.8; text-align: center;">
        <!-- Title -->
        <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; text-align: center;">
            How will GLP-1 work for me?
        </h1>
        <!-- Graph -->
        <img src="https://images.fillout.com/orgid-144514/flowpublicid-h8W55RQgZcus/widgetid-cNV2Pb6xmSofXCwpzXbAXE/4mKoUZgiyCT7prn5Jbq1sw/qgraph2.png?a=fFXtpFnfqfp18Mr5vHrAq4" 
             alt="GLP-1 Progress Graph" 
             style="max-width: 100%; height: auto; margin-bottom: 1.5rem; display: block; margin-left: auto; margin-right: auto;">
        <!-- Description Text -->
        <div style="text-align: left; font-size: 1rem; color: #2C3E50; line-height: 1.8;">
            <p style="margin-bottom: 1.5rem;">
                Your body gets acclimated to GLP-1 medication for the first 4 weeks. After that, weight loss increases dramatically until week 9 when it becomes a 
                <span style="font-weight: bold; text-decoration: underline;">fat burning machine</span>.
            </p>
            <p>
                We identify the <span style="color: #68B04A; font-weight: bold;">root causes</span> of your metabolic issues, so you get a long-term solution, not just another quick fix.
            </p>
        </div>
    </div>
`;
