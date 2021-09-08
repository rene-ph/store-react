import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SummaryCart from '../SummaryCart/SummaryCart';
import Typography from '@material-ui/core/Typography';
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import UserPaymentForm from '../UserPaymentForm';
import { QontoConnector, QontoStepIcon } from "./CustomizeStepper.styles";
import { useStyles } from "./CustomizeStepper.styles";
import {
    emailValidator,
    validForm,
    requiredField,
    optionalField,
    creditCardValidator
} from '../../utils/utils';

const formUser = {
    email: {
        id: "id_email",
        value: "",
        error: null,
        validator: emailValidator
    },
    first_name: {
        id: "id_first_name",
        value: "",
        error: null,
        validator: requiredField
    },
    last_name: {
        id: "id_last_name",
        value: "",
        error: null,
        validator: requiredField
    },
    company: {
        id: "id_company",
        value: "",
        error: null,
        validator: optionalField
    },
    address: {
        id: "id_address",
        value: "",
        error: null,
        validator: requiredField
    },
    city: {
        id: "id_city",
        value: "",
        error: null,
        validator: requiredField
    }
};


const formPayment = {
    card_number: {
        id: "id_card_number",
        value: "",
        error: null,
        validator: creditCardValidator
    },
    name_on_card: {
        id: "id_name_on_card",
        value: "",
        error: null,
        validator: requiredField
    },
    expiration: {
        id: "id_expiration",
        value: "",
        error: null,
        validator: requiredField
    },
    security_code: {
        id: "id_security_code",
        value: "",
        error: null,
        validator: requiredField
    }
};

function getSteps() {
    return ['Cart', 'Information', 'Payment'];
}

export default function CustomizedStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const [formUserInfo, setFormUserInfo] = useState(formUser);
    const [formUserPayment, setFormUserPayment] = useState(formPayment);

    const handleNext = () => {
        if(validateForm()){
            if (activeStep === 2) {
                props.checkout();
            }
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const validateForm = () => {
        switch (activeStep) {
            case 0:
                return true;
            case 1:
                return validForm(formUserInfo);
            default:
                return false;
        }
        
    };

    const saveForm = (form) => {
        switch (activeStep) {
            case 1:
                setFormUserInfo(form);
                break; 
            case 2:
                setFormUserPayment(form);
                break;    
            default:
                return false;
        }
        
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <SummaryCart/>;
            case 1:
                return <UserInfoForm formUser={formUserInfo} saveForm={saveForm} />;
            case 2:
                return <UserPaymentForm formPayment={formUserPayment} saveForm={saveForm} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <div className={classes.root}>
            
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <form noValidate autoComplete="off">
                <div >
                    {activeStep === steps.length ? (
                        <div>
                            <Typography variant="h3" gutterBottom>
                                All steps completed - you&apos;re finished
                            </Typography>
                        </div>
                    ) : (
                        <div> 
                            {getStepContent(activeStep)}
                            <div className={classes.wrapperBtn}>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Pay now' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}
