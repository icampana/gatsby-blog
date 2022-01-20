import CMS from 'netlify-cms-app';
import { TagControl, TagPreview } from '../components/tagWidget';

import '../css/layout.css';

CMS.registerWidget('tags', TagControl, TagPreview);