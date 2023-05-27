import { Visuals } from '../visuals/visuals';
import styles from './projects-vis.module.scss';
import classNames from 'classnames';
import { Link, MemoryRouter, Routes, Route } from 'react-router-dom';

export interface ProjectsVisProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-projectss-and-templates
 */
export const ProjectsVis = ({ className }: ProjectsVisProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={classNames('H1', styles.ProjectsLabel)}>Projects</h1>
            <div className={styles.button_array}>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <button className={classNames(styles.linkButton, styles.projButtons)}>
                        Videos
                    </button>
                </Link>
                <Link to="/projects-vis" style={{ textDecoration: 'none' }}>
                    <button
                        className={classNames(styles.projButtons, styles.linkButton, styles.active)}
                    >
                        Visuals
                    </button>
                </Link>
                <Link to="/projects-web" style={{ textDecoration: 'none' }}>
                    <button className={classNames(styles.projButtons, styles.linkButton)}>
                        Websites
                    </button>
                </Link>
            </div>
            <span className={styles.projectPane}>
                <Routes>
                    <Route path="/" element={<Visuals />} />
                </Routes>
            </span>
        </div>
    );
};
