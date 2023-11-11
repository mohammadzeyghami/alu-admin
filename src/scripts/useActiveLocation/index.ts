import { useLocation } from "react-router-dom";
interface activeLocationProps {
  target: string;
}
export const useCurrentLocation = () => {
  const location = useLocation();
  return location.pathname;
};
export const useActivelocation = ({ target }: activeLocationProps) => {
  const location = useCurrentLocation();
  console.log({ target });
  return location?.indexOf(target) !== -1;
};
