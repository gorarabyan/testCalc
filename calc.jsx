import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [minutes, setMinutes] = useState(100);
    const [sms, setSms] = useState(0);
    const [intSize, setIntSize] = useState(5);
    const [additionalServices, setAdditionalServices] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        data();
    }, []);

    const data = () => {
        const data = {
            minutes: 100,
            sms: 0,
            intSize: 5,
        };

        setMinutes(data.minutes);
        setSms(data.sms);
        setIntSize(data.intSize);
    };

    const handleMinutesChange = (value: number) => {
        setMinutes(value);
    };

    const handleSmsChange = (value: number) => {
        setSms(value);
    };

    const handleIntSizeChange = (value: number) => {
        setIntSize(value);
    };

    const handleAdditionalServiceChange = (service: string) => {
        if (additionalServices.includes(service)) {
            setAdditionalServices(additionalServices.filter(item => item !== service));
        } else {
            setAdditionalServices([...additionalServices, service]);
        }
    };

    const calculateTotal = () => {
        let cost = 0;

        if (minutes <= 100) {
            cost += 10;
        } else if (minutes <= 200) {
            cost += 20;
        } else if (minutes <= 300) {
            cost += 30;
        } else {
            cost += 40;
        }

        cost += sms * 0.1;

        cost += intSize * 2;

        cost += additionalServices.length * 5;

        setTotalCost(cost);
    };

    const handleSubmit = () => {
        calculateTotal();

        const costData = {
            minutes,
            sms,
            intSize,
            additionalServices,
            totalCost,
        };

        alert(JSON.stringify(costData));
    };

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <label>Minutes:</label>
                <input type="range" min={100} max={600} step={100} value={minutes} onChange={e => handleMinutesChange(Number(e.target.value))} />
                <span>{minutes}</span>
            </div>
            <div>
                <label>SMS:</label>
                <input type="range" min={0} max={150} step={50} value={sms} onChange={e => handleSmsChange(Number(e.target.value))} />
                <span>{sms}</span>
            </div>
            <div>
                <label>Internet (GB):</label>
                <input type="range" min={5} max={25} step={5} value={intSize} onChange={e => handleIntSizeChange(Number(e.target.value))} />
                <span>{intSize}</span>
            </div>
            <div>
                <label>Additional Services:</label>
                <div>
                    <label>
                        <input type="checkbox" checked={additionalServices.includes('service1')} onChange={() => handleAdditionalServiceChange('service1')} />
                        Service A
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={additionalServices.includes('service2')} onChange={() => handleAdditionalServiceChange('service2')} />
                        Service B
                    </label>
                </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div>Total: ${totalCost}</div>
        </div>
    );
};

export default Calculator;
