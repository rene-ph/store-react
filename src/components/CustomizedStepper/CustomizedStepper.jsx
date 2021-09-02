import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./CustomizeStepper.styles";
import { QontoConnector, QontoStepIcon } from "./CustomizeStepper.styles";
import UserInfoForm from '../UserInfoForm/UserInfoForm';
import UserPaymentForm from '../UserPaymentForm';

function getSteps() {
    return ['Cart', 'Information', 'Payment'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return '';
        case 1:
            return <UserInfoForm />;
        case 2:
            return <UserPaymentForm />;
        default:
            return 'Unknown step';
    }
}

export default function CustomizedSteppers() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography variant="h3" gutterBottom>
                                All steps completed - you&apos;re finished
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
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
