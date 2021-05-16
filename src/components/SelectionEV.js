import React, { useState } from "react";
import HomeInstallation from "./HomeInstallation";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

export default function SelectionEV({
	carConsumption,
	carEnergy,
	range,
	useCar,
	setUseCar,
}) {
	return (
		<div className="my-4">
			<Card>
				<Grid container spacing={1} display="inline">
					<Grid item xs={2}>
						<Switch
							checked={useCar}
							onChange={(event) => {
								setUseCar(!useCar);
							}}
							name="checked"
							color="primary"
						/>
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid
						item
						xs={9}
						alignItems="center"
						justify="center"
						direction="column"
					>
						<Typography>Electric vehicle</Typography>
					</Grid>
				</Grid>

				<Divider />
				<CardContent>
					<HomeInstallation
						disabled={!useCar}
						name={"Battery size"}
						item={carEnergy}
					/>
					<HomeInstallation
						disabled={!useCar}
						name={"Car Consumption"}
						item={carConsumption}
					/>
					<HomeInstallation
						disabled={!useCar}
						name={"Car Range"}
						item={range}
						min={2000}
						max={100000}
						step={2000}
					/>
				</CardContent>
			</Card>
		</div>
	);
}
