import React, { useState, useEffect } from 'react'
import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk'
import useAeternitySDK from '../Scripts/useAeternitySDK.ts'


//networkId
const Connect = () => {
    const { aeSdk, connectToWallet, address, getBalance } = useAeternitySDK();
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState(null);
    const [spendTo, setSpendTo] = useState('');
    const [spendAmount, setSpendAmount] = useState('1');
    const [thankYouVisible, setThankYouVisible] = useState(false);
    const [noAmount, setnoAmount] = useState(false);
    const [email, setEmail] = useState(false);
    const [noEmail, setNoEmail] = useState(false);


    let aci = [
        {
            "contract": {
                "functions": [
                    {
                        "arguments": [],
                        "name": "init",
                        "payable": false,
                        "returns": "CharityTransfer.state",
                        "stateful": false
                    },
                    {
                        "arguments": [],
                        "name": "sendMoney",
                        "payable": true,
                        "returns": {
                            "tuple": []
                        },
                        "stateful": true
                    },
                    {
                        "arguments": [],
                        "name": "getContractDetails",
                        "payable": false,
                        "returns": "CharityTransfer.state",
                        "stateful": false
                    }
                ],
                "kind": "contract_main",
                "name": "CharityTransfer",
                "payable": true,
                "state": {
                    "record": [
                        {
                            "name": "user1",
                            "type": "address"
                        },
                        {
                            "name": "user2",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "int"
                        },
                        {
                            "name": "isConfirmed",
                            "type": "bool"
                        }
                    ]
                },
                "typedefs": []
            }
        }
    ];
    let bytecode =
        "cb_+QE0RgOg9VJwCt/1bunq4G0DoMIjvwztRQHnOmS4btUFfbgIcyPAuQEGuM3+Dv7QsgA3ADcERwBHAAcXDAKCDAKEDAKGDAKIJwwIAP5E1kQfADcANwBVAoIaDoSfAKDV2POv3jVbFg8fneTzQzjhJ42+W4ZvmRZh17lUxKBJaxoOhgAaDoh/AQM//qGAQw0ENwA3ACYIiAcMBPsDpVRyYW5zYWN0aW9uIGFscmVhZHkgY29uZmlybWVkIG9yIHJlamVjdGVkCwAfMAAHDAj7A31BbW91bnQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAwCwAUCoaGAQM/sy8DEQ7+0LJJZ2V0Q29udHJhY3REZXRhaWxzEUTWRB8RaW5pdBGhgEMNJXNlbmRNb25leYIvAIU3LjQuMAFOSKJN";



    useEffect(() => {
        const fetchBalance = async () => {
            try {
                setSpendTo('ak_2QaAzpW4w4pnPNDdrgdLHu5v4bGMxVzUD2F16X3aUrayPcBzZm');
                const balance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });
                setBalance(balance);
            } catch (error) {
                console.error(error.message);
            }
        };

        if (address) {
            fetchBalance();
        }
    }, [aeSdk, address, getBalance]);


    const updateBalance = async () => {
        const balance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });
        setBalance(balance);
    }


    const handleConnectClick = async () => {
        setIsLoading(true);
        try {
            await connectToWallet();
        } catch (error) {
            if (!(error instanceof Error)) throw error;
            console.error(error.message);
        } finally {
            setIsLoading(false);
        }


    };
    const get = async () => {
        const balance = await aeSdk.getBalance(address, { format: AE_AMOUNT_FORMATS.AE });

        setBalance(balance);

    }

    const handleSpendClick = async () => {
        try {
            console.log(spendAmount, spendTo);
            const contract = await aeSdk.initializeContract({ aci, bytecode, address: "ct_VAVZxayCvmd163vQGpGrNRmaZLfVMbRHnxSVAuwovGEDCjBCs" })
            console.log("contract", contract);


            // const sendMoneyResult = await contract.sendMoney("ak_cgWc8Rs7UcrmRu7VMXBCsG3mMaAKMmAnKgPWsWby5S5C5rhc3");
            // console.log(sendMoneyResult);
            const options1 = {
                amount: spendAmount * 1000000000000000000,
                callData: "",
                fee: null,
                gas: null,
                gasPrice: 1000000000,
            };
            const args = [];
            const options = Object.fromEntries(
                Object.entries(options1).filter(([, v]) => v != null),
            );

            contract
                ?.$call("sendMoney", args, options)
                .then((result) => {
                    console.log(result);
                    // setSpendPromise(result.hash)
                    get()
                    setSpendAmount('')
                    setThankYouVisible(true)
                    setTimeout(() => setThankYouVisible(false), 5000);
                    console.log(result);

                });

            // const result = await aeSdk.spend(spendAmount * 1000000000000000000, spendTo);


        } catch (error) {
            console.error(error.message);
            setThankYouVisible(false)
        }
        updateBalance()
    };


    return (
        <>
            <div >
                {address ? (
                    <React.Fragment>


                        <div className='p-4 rounded-lg shadow-md w-64 bg-white
                flex flex-col items-start slide-in-left'>

                            <div
                                className='outline-none px-1 py-4'
                            >
                                <label>Subscribe to Our Newsletter:</label>
                                <input type="email"
                                    className='outline-none border rounded-md'
                                    placeholder='abc@gmail.com'
                                    required
                                    onChange={(e) => {
                                        if (e.target.value !== undefined) {
                                            setEmail(true);
                                        }
                                        else {
                                            setEmail(false);
                                        }
                                    }}
                                />
                            </div>
                            <div
                                className='outline-none px-1 py-4'
                            >
                                <label
                                    className='p__cormorant'
                                >Balance: {balance} Ae Coins</label>
                            </div>


                            <div className='
                            outline-none px-1 py-4
                            '>
                                <label

                                >Amount to Pay:</label>
                                <input
                                    className='outline-none'
                                    type='number'
                                    placeholder='Enter amount'
                                    value={spendAmount}
                                    readOnly
                                />
                            </div>
                            {thankYouVisible && (
                                <div className="text-green-500">
                                    Successfully paid and subscribed!
                                    Check your mail for Confirmation of email
                                </div>
                            )}

                            {noAmount && (
                                <div className='text-red-500'>
                                    Amount must be greator than 0
                                </div>
                            )}

                            {noEmail && (
                                <div className='text-red-500'>
                                    Email Not Provided!
                                </div>
                            )}
                            <button className='bg-blue text-white font-bold start-project rounded-lg'
                                onClick={() => {
                                    if (email && spendAmount) {
                                        handleSpendClick()
                                    }
                                    else {

                                        if (!email) {
                                            setNoEmail(true);
                                            setTimeout(() => setNoEmail(false), 2000);
                                        }
                                        else {
                                            setnoAmount(true);
                                            setTimeout(() => setnoAmount(false), 5000);
                                        }


                                    }
                                }}
                            >
                                Confirm
                            </button>


                        </div>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className='flex flex-row-reverse ...'>

                            <button className='bg-blue text-white font-bold start-project rounded-lg'
                                onClick={handleConnectClick} disabled={isLoading}>
                                {isLoading ? 'Connecting…' : 'Subscribe'}
                            </button>



                        </div>
                        {isLoading}
                    </React.Fragment>
                )}
            </div>
        </>
    );
};

export default Connect;