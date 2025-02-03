import React from 'react';
import { Typography, Card } from 'antd';
import '../styles.css'
import useTitle from '../hooks/UseTitle';
import Book from '../assets/Book.jpg'
import RoshHashanah from '../assets/RoshHashanah.jpg'
import Community from '../assets/Community.jpg'
import Thirteen from '../assets/Thirteen.jpg'
import Jerusalem from '../assets/Jerusalem.jpg'
import Cloth from '../assets/Cloth.jpg'

const { Title, Paragraph } = Typography;

const History = () => {
  useTitle('History - Selichot');

  return (
    <div style={{ padding: '20px' }}>
      <Card className='title-card'>
        <Title level={2} style={{ color: '#0038B8' }}>History of Selichot</Title>
        
        <img src={Book} alt="Traditional Jewish Prayer Book" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />

        {/* Selichot Prayers Introduction */}
        <Paragraph className='history-text'>
          Selichot prayers are a deeply significant part of Jewish tradition, performed during the period of repentance leading up to the High Holidays of Rosh Hashanah and Yom Kippur. They are a collection of hymns, petitions, and prayers that are recited to seek forgiveness from the Almighty for the sins committed throughout the year. The Selichot prayers offer an opportunity for spiritual reflection and renewal, allowing individuals to turn inward, atone for their mistakes, and recommit to their faith.
        </Paragraph>
        
        {/* Start and End Dates */}
        <Paragraph className='history-text'>
          The practice of reciting Selichot prayers begins on the <span style={{ color: '#0038B8' }}>2nd day of Elul</span>, the last month of the Hebrew calendar. The month of <span style={{ color: '#0038B8' }}>Elul</span> is a time of preparation and introspection, marking the start of the 40-day period that culminates in <span style={{ color: '#0038B8' }}>Yom Kippur, the Day of Atonement</span>. The recitation of Selichot prayers continues daily until the <span style={{ color: '#0038B8' }}>9th of Tishrei</span>, the day before <span style={{ color: '#0038B8' }}>Rosh Hashanah, the Jewish New Year</span>. This period is considered a time of grace, in which Jews are encouraged to engage in self-examination, prayer, and acts of charity to seek God's forgiveness.
        </Paragraph>
        
        {/* Significance of the Dates */}
        <Paragraph className='history-text'>
          The specific dates for the observance of Selichot are crucial in Jewish tradition:
          <ul>
            <li><strong style={{ color: '#0038B8' }}>2nd of Elul</strong>: This marks the official beginning of Selichot observance, during which Jews begin reciting these prayers at night, before dawn.</li>
            <li><strong style={{ color: '#0038B8' }}>9th of Tishrei</strong>: The last day of Selichot prayers is the day before Rosh Hashanah, the Jewish New Year. On this day, the prayers help prepare individuals spiritually for the High Holidays.</li>
            <li><strong style={{ color: '#0038B8' }}>Saturdays and Jewish New Year</strong>: Selichot prayers are generally not recited on Saturday mornings or during the Jewish New Year (the 1st and 2nd of Tishrei), as these days are considered too holy for additional prayers of supplication.</li>
          </ul>
        </Paragraph>
        
        <img src={RoshHashanah} alt="Rosh Hashanah" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />

        {/* The Role of Selichot in Jewish Culture */}
        <Paragraph className='history-text'>
          In addition to their role as prayers of repentance, Selichot prayers are steeped in Jewish history and culture. The word "Selichot" itself comes from the Hebrew root <span style={{ color: '#0038B8' }}>ס-ל-ח (S-L-CH)</span>, meaning "forgiveness." These prayers are meant to inspire deep spiritual reflection and to help individuals reconnect with God. The Selichot prayers highlight themes of mercy, repentance, and God's forgiveness, with particular focus on the <strong style={{ color: '#0038B8' }}>13 Attributes of Mercy</strong> (known as "Shloshah Asar Middot"), a set of divine attributes mentioned in the Torah that emphasize God's compassion.
        </Paragraph>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Thirteen} alt="13 Attributes of Mercy" 
            style={{ width: '50%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />
        </div>

        {/* Customary Practices */}
        <Paragraph className='history-text'>
          The Selichot prayers are recited primarily at night, and many Jewish communities, especially in Sephardic traditions, gather in synagogues before dawn to recite them together. The prayers include the <strong style={{ color: '#0038B8' }}>Aleluyah</strong> verses, <strong style={{ color: '#0038B8' }}>Kaddish</strong>, <strong style={{ color: '#0038B8' }}>Tachanun</strong> (confession), and many other supplicatory prayers. The <strong style={{ color: '#0038B8' }}>Ashkenazi tradition</strong> features longer poetic liturgies, and the <strong style={{ color: '#0038B8' }}>Sephardic</strong> and <strong style={{ color: '#0038B8' }}>Bene-Israeli</strong> traditions include special additions to the prayers, such as the <strong style={{ color: '#0038B8' }}>Selichot poetry</strong> that reflects the unique cultural heritage of these communities.
        </Paragraph>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Community} alt="Bene Israeli Community" 
            style={{ width: '75%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />
        </div>

        {/* The Central Themes of Selichot */}
        <Paragraph className='history-text'>
          The core themes of Selichot prayers include:
          <ul>
            <li><strong style={{ color: '#0038B8' }}>Repentance (Teshuvah)</strong>: The prayers encourage self-examination and taking responsibility for one's actions, allowing individuals to seek God's forgiveness through sincere repentance.</li>
            <li><strong style={{ color: '#0038B8' }}>God's Mercy</strong>: Emphasizing that God's mercy is infinite and that sincere repentance can bring forgiveness, the Selichot prayers focus on the divine attributes of mercy.</li>
            <li><strong style={{ color: '#0038B8' }}>Community and Unity</strong>: The recitation of Selichot is often a communal practice, uniting people in their shared spiritual journey and encouraging collective repentance and support.</li>
          </ul>
        </Paragraph>

        <img src={Jerusalem} alt="Jerusalem Landscape" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />

        {/* Conclusion */}
        <Paragraph className='history-text'>
          In conclusion, Selichot prayers are a profound spiritual practice that holds deep meaning for Jewish communities. They offer an opportunity for reflection, repentance, and renewal in preparation for the High Holidays. Whether recited in a synagogue or at home, the prayers connect individuals with centuries of Jewish tradition, reminding them of their relationship with God and their commitment to moral and spiritual growth. As we await the accurate and authentic recordings of these prayers, we strive to ensure that this sacred tradition continues to be accessible to all, providing a meaningful and transformative experience for every listener.
        </Paragraph>

        <img src={Cloth} alt="Cloth" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} />
            
      </Card>
    </div>
  );
};

export default History;
