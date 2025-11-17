import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { metrics } from "../../theme/metrics";

export const styles = StyleSheet.create({
  comingSoonBox: {
    padding: metrics.lg,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: metrics.radiusMd,
    marginTop: metrics.xl,
  },
  comingSoonText: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
});
