const GenderCheckbox = ({onChangeCB ,selectedGender}) => {
    	return (
    		<div className={`flex`}>
    			<div className={`form-control`}>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text text-black'>Male</span>
    					<input name="gender" value="male" onChange={()=>onChangeCB("male")}  checked={selectedGender === 'male'} type='checkbox' className={`checkbox border-slate-900`} />
    				</label>
    			</div>
    			<div className={`form-control`}>
    				<label className={`label gap-2 cursor-pointer`}>
    					<span className='label-text text-black'>Female</span>
    					<input name="gender" value="female"  onChange={()=>onChangeCB("female")} checked={selectedGender === 'female'} type='checkbox' className={`checkbox border-slate-900`} />
    				</label>
    			</div>
    		</div>
    	);
    };
    export default GenderCheckbox;