import { useSetting } from "@Core/Hooks";
import { Field, Switch } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

export const Autostart = () => {
    const { t } = useTranslation();

    const { value: autostartApp, updateValue: setAutostartApp } = useSetting<boolean>("general.autostartApp", false);

    return (
        <Field label={t("settingsGeneral.autostart")}>
            <Switch checked={autostartApp} onChange={(_, { checked }) => setAutostartApp(checked)} />
        </Field>
    );
};
