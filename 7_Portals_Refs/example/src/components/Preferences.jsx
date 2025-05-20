import { useState } from "react";
import { useRef } from "react";


function Preferences() {
    const [wantsNewProdInfo, setWantsNewProdInfo] = useState(False);
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(False);

    function handleChangeNewProdPref() {
        setWantsNewProdInfo((prevPref) => !prevPref);
    }

    function handleChangeUpdateProdPref() {
        setWantsProdUpdateInfo((prevPref) => !prevPref);
    }

    return (
        <div className={classes.preferences}>
            <label>
                <input
                    type="checkbox"
                    id="pref-new"
                    checked={wantsNewProdInfo}
                    onChange={handleChangeNewProdPref}
                />
                <span>New Products</span>
            </label>
            <label>
                <input
                    type="checkbox"
                    id="pref-updates"
                    checked={wantsProdUpdateInfo}
                    onChange={handleChangeUpdateProdPref}
                />
                <span>Product Updates</span>
            </label>
        </div>
    );
}

export default Preferences;