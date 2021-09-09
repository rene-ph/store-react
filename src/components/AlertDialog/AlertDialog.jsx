import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { setDisplayModalDialog } from "../../redux/rootSlice";
import { getModalDialog } from '../../redux/selector/root.selector';

export default function AlertDialog() {
    const dispatch = useDispatch();
    const modalDialog = useSelector(getModalDialog);

    const handleClose = () => {
        dispatch(setDisplayModalDialog({
            open: false,
            title: '',
            text: '',
            cancelText: 'Cancel',
            accepText: 'OK'
        }));
    };

    return (
        <div>
            <Dialog
                open={modalDialog.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {modalDialog.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {modalDialog.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {modalDialog.cancelText}
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        {modalDialog.accepText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
