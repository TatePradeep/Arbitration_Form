import React, { useState } from 'react';

const App = () => {
  const [initialSectionVisible, setInitialSectionVisible] = useState(false);
  const [partySectionVisible, setPartySectionVisible] = useState(false);
  const [logisticsSectionVisible, setLogisticsSectionVisible] = useState(false);
  const [additionalServicesSectionVisible, setAdditionalServicesSectionVisible] = useState(false);
  const [useInformation, setUseInformation] = useState(true);
  const [formCount, setFormCount] = useState(1);
  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const toggleUseInformation = () => {
    setUseInformation(!useInformation);
  };

  const toggleSection = (section) => {
    switch (section) {
      case 'initialSection':
        setInitialSectionVisible(!initialSectionVisible);
        setPartySectionVisible(false);
        setLogisticsSectionVisible(false);
        setAdditionalServicesSectionVisible(false);
        break;
      case 'partySection':
        setPartySectionVisible(!partySectionVisible);
        setInitialSectionVisible(false);
        setLogisticsSectionVisible(false);
        setAdditionalServicesSectionVisible(false);
        break;
      case 'logisticsSection':
        setLogisticsSectionVisible(!logisticsSectionVisible);
        setInitialSectionVisible(false);
        setPartySectionVisible(false);
        setAdditionalServicesSectionVisible(false);
        break;
      case 'additionalServicesSection':
        setAdditionalServicesSectionVisible(!additionalServicesSectionVisible);
        setInitialSectionVisible(false);
        setPartySectionVisible(false);
        setLogisticsSectionVisible(false);
        break;
      default:
        break;
    }
  };

  const buttonContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#fff',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginLeft:'90px',
    padding:'30px',
  };
  

  const buttonStyle = {
    marginTop: '30px',
    margin: '0 90px',
    padding: '10px',
    fontSize: '16px',
    backgroundcolor: '#9AD0C2',
    borderRadius:'20px',
    width: '50px',
  height: '50px',
  borderRadius: '50%',
  // color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  };
  const title=
  {
marginLeft:'50px',
marginBottom:'40px',
  }
  const subtitle={
    marginLeft:'80px',
  }
  

  const contentStyle = {
    marginTop: '150px', // Adjust this value to leave space for the fixed buttons
    padding: '20px',
  };

  const formStyle = {
    margin: '10px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 40px 40px 40px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const switchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const switchLabelStyle = {
    marginRight: '10px',
  };

  const switchStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
  };

  const sliderStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: useInformation ? '#9AD0C2' : '#ccc',
    borderRadius: '24px',
    transition: '0.4s',
  };

  const roundStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: '4px',
    left: useInformation ? '26px' : '4px',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    transition: '0.4s',
  };
  const styles = {
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: 40,
    },
    label: {
      marginBottom: 5,
    },
    input: {
      width: '50%',
      height:'30px',
      marginBottom: 5,
      
    },
  };
  const fStyle = {
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    
    <div>
      <div style={buttonContainerStyle}>
      <div>
          <button onClick={() => toggleSection('initialSection')} style={buttonStyle}>
            1
          </button>
          <h4 style={title}>Initial Information</h4>
        </div>
        <div>
          <button onClick={() => toggleSection('partySection')} style={buttonStyle}>
            2
          </button>
          <h4 style={title}>Party Information</h4>
        </div>
        <div>
          <button onClick={() => toggleSection('logisticsSection')} style={buttonStyle}>
            3
          </button>
          <h4 style={subtitle}>Logistics</h4>
        </div>
        <div>
          <button onClick={() => toggleSection('additionalServicesSection')} style={buttonStyle}>
            4
          </button>
          <h4 style={title}>Additional Services</h4>
          
        </div>
       </div>
      
      

      <div style={contentStyle}>
        {initialSectionVisible && (
          <section>
            <h2>Initial Information (Fill all the details)</h2>
            {/* Content for Initial Information goes here */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">First Name</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Last Name</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Address</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Postal Code</label>
          <input type="number" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Email</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">DOB</label>
          <input type="date" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>
            {/* ... */}
            
          </section>
        )}

{/* party form */}
        <div style={contentStyle}>
        {partySectionVisible && (
          <section>
           <h2>Booking Party Information (Enter as much as possible)</h2>

            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}>Use Information On Account?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>

            {/* First Form */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Firm Name</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Booking Contact No</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Phone No</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Billing Address</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Zip/Postal Code</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Country</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
        <div class="form-group" style={formGroupStyle}>
          <label for="role">Role:</label>
          <select id="role" name="role" required>
            <option value="client">Client</option>
            <option value="representative">Representative</option>
          </select>
        </div>
    
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Name of Represented Client</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Lead Counsel Name</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
    
        </div>

  {/* Add similar styling for other form groups */}
  {/* ... */}




            {/* Opposing party Information */}
            <h2>Opposing Party Information</h2>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Firm Name</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Booking Contact No</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Phone No</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Billing Address</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Zip/Postal Code</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Country</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
        <div class="form-group" style={formGroupStyle}>
          <label for="role">Role:</label>
          <select id="role" name="role" required>
            <option value="client">Client</option>
            <option value="representative">Representative</option>
          </select>
        </div>
    
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Name of Represented Client</label>
          <input type="number" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Lead Counsel Name</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
    
        </div>

        <div>
      {[...Array(formCount)].map((_, index) => (
        <div key={index} style={fStyle}>
          <h2>Form {index + 1}</h2>
          {/* Your form fields and input elements go here */}
        </div>
      ))}

      <button onClick={addForm}>+ Additional Parties</button>
    </div>

          </section>
          
        )}
        </div>

        {logisticsSectionVisible && (
          <section>
            <h2>Logistics</h2>
            {/* Content for Logistics goes here */}
            <div>
      <h3>Basic Logistics</h3>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Style of Cause:</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Court File:</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="bookingDate">Booking Date:</label>
          <input type="date" id="bookingDate" name="bookingDate" style={styles.input}/>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
    <div style={{ marginRight: '10px' }}>
          <label htmlFor="startTime">Start Time:</label>
          <input type="time" id="startTime" name="startTime" style={styles.input} />
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="endTime">End Time:</label>
          <input type="time" id="endTime" name="endTime" style={styles.input} />
        </div>
        
        <div>
          <label htmlFor="timeZone">Time Zone:</label>
          <input type="text" id="timeZone" name="timeZone" style={styles.input}/>
        </div>
        </div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Arbitrator's</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Email</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input}/>
        </div>
        </div>
        <div style={switchContainerStyle}>
              <span style={switchLabelStyle}>Tribunal Security?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Witness's</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="courtFile">Email</label>
          <input type="text" id="courtFile" name="courtFile" style={styles.input}/>
        </div>
        </div>
            

    {/* Virtual Logistics */}
    <div>
      <h3>Virtual Logistics</h3>
      {/* Add your input fields for virtual logistics here */}
      <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Do you require VCM (Virtual Case Management)?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Is their a partivular VCM you want to work with?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
         
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label for="role">Select a virtual platform</label>
          <select id="role" name="role" required>
            <option value="client">Zoom</option>
            <option value="representative">Goggle Meet</option>
          </select>
          
        </div>
        <label for="role">Number of virtual breakout rooms</label>
          <select id="role" name="role" required>
            <option value="client">1</option>
            <option value="representative">2</option>
            <option value="representative">3</option>

          </select>
          </div> 
          <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Do you need us to provide Document Managing Services?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Do you have any special accommodations for your booking that our I.T.team can look into prior to the start date?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Would you like the your matter to be recorded?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
         
    </div>
    


    </div>
    
    
            
            {/* ... */}
          </section>
        )}

        {additionalServicesSectionVisible && (
          <section>
            <h2>Additional Services</h2>
            {/* Content for Additional Services goes here */}
            <h3>Court Reporting</h3>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Will this matter plan to have a Court Reporter?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}>  Would you like an Arbitration Place Court Reporter?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Is there a specific Arbitration Place Court Reporter you prefer?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}>  Will a transcript be required?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Turnaround time?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Multilingual?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Please list the non-english language you would like accommodated(separate by comma)</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Daily Rough Draft?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Realtime reporting?</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>

        <h3>Additional Features</h3>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Do you require interpretation?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Please list all languages to be interpreted(separate by comma)</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>
        <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Do you require CART services?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={switchContainerStyle}>
              <span style={switchLabelStyle}> Will you need a quote prior to confirmation?</span>
              <label style={switchStyle} className="switch">
                <input
                  type="checkbox"
                  checked={useInformation}
                  onChange={toggleUseInformation}
                  style={{ display: 'none' }}
                />
                <span style={sliderStyle}></span>
                <span style={roundStyle}></span>
              </label>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label htmlFor="styleOfCause">Please list any additional requests or considerations you might have at this time</label>
          <input type="text" id="styleOfCause" name="styleOfCause" style={styles.input}/>
        </div>
        </div>


            {/* ... */}
          </section>
        )}
      </div>
    </div>
  );
};

export default App;
